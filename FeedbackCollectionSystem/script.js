let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];

const form = document.getElementById('feedbackForm');
const feedbackList = document.getElementById('feedbackList');

function displayFeedbacks() {
    feedbackList.innerHTML = '';
    feedbacks.forEach(f => {
        const div = document.createElement('div');
        div.className = 'feedback-item';
        div.innerHTML = `<strong>${f.name}</strong> (${f.email})<p>${f.message}</p>`;
        feedbackList.appendChild(div);
    });
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('feedback').value.trim();

    if (!name || !email || !message) return;

    feedbacks.push({ name, email, message });
    localStorage.setItem('feedbacks', JSON.stringify(feedbacks));

    form.reset();
    displayFeedbacks();
});

// Display feedbacks on page load
displayFeedbacks();
