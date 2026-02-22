const quizData = [
    {
        question: "Which language runs in a web browser?",
        answers: [
            { text: "Java", correct: false },
            { text: "C", correct: false },
            { text: "Python", correct: false },
            { text: "JavaScript", correct: true }
        ]
    },
    {
        question: "What does CSS stand for?",
        answers: [
            { text: "Cascading Style Sheets", correct: true },
            { text: "Computer Style Sheets", correct: false },
            { text: "Creative Style System", correct: false },
            { text: "Colorful Style Sheets", correct: false }
        ]
    },
    {
        question: "What is 5 + 7?",
        answers: [
            { text: "12", correct: true },
            { text: "10", correct: false },
            { text: "14", correct: false },
            { text: "13", correct: false }
        ]
    },
    {
        question: "Which HTML tag is used for links?",
        answers: [
            { text: "<link>", correct: false },
            { text: "<a>", correct: true },
            { text: "<href>", correct: false },
            { text: "<url>", correct: false }
        ]
    }
];

const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const resultContainer = document.getElementById('result');
const scoreElement = document.getElementById('score');
const restartButton = document.getElementById('restart-btn');

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    questionContainer.classList.remove('hide');
    resultContainer.classList.add('hide');
    nextButton.classList.add('hide');
    showQuestion();
}

function showQuestion() {
    resetState();
    const current = quizData[currentQuestion];
    questionElement.innerText = current.question;
    current.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if(answer.correct) button.dataset.correct = answer.correct;
        button.addEventListener('click', selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.classList.add('hide');
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';
    if(correct) {
        selectedButton.classList.add('correct');
        score++;
    } else {
        selectedButton.classList.add('wrong');
    }

    Array.from(answerButtons.children).forEach(button => {
        button.disabled = true;
        if(button.dataset.correct === 'true') {
            button.classList.add('correct');
        }
    });

    nextButton.classList.remove('hide');
}

nextButton.addEventListener('click', () => {
    currentQuestion++;
    if(currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    questionContainer.classList.add('hide');
    resultContainer.classList.remove('hide');
    scoreElement.innerText = `${score} / ${quizData.length}`;
}

restartButton.addEventListener('click', startQuiz);

startQuiz();
