const poll = {
    question: "Which technology do you like the most?",
    options: [
        "Web Development",
        "AI & Machine Learning",
        "Data Science",
        "Cyber Security"
    ],
    votes: JSON.parse(localStorage.getItem("pollVotes")) || [0, 0, 0, 0]
};

const voted = localStorage.getItem("voted");

function vote(index) {
    if (voted) {
        alert("You have already voted!");
        return;
    }

    poll.votes[index]++;
    localStorage.setItem("pollVotes", JSON.stringify(poll.votes));
    localStorage.setItem("voted", "true");

    showResults();
}

function showResults() {
    let total = poll.votes.reduce((a, b) => a + b, 0);
    let resultDiv = document.getElementById("results");
    resultDiv.innerHTML = "";

    poll.options.forEach((option, i) => {
        let percent = total ? Math.round((poll.votes[i] / total) * 100) : 0;

        resultDiv.innerHTML += `
            <p>${option} - ${percent}%</p>
            <div class="result-bar">
                <div class="fill" style="width:${percent}%">${percent}%</div>
            </div>
        `;
    });
}

showResults();
