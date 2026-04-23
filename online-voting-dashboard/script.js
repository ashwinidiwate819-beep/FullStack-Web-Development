let votes = JSON.parse(localStorage.getItem("votes")) || [0, 0, 0, 0];

function vote(index) {
    votes[index]++;
    localStorage.setItem("votes", JSON.stringify(votes));
    updateResults();
}

function updateResults() {
    const total = votes.reduce((a, b) => a + b, 0);

    votes.forEach((v, i) => {
        document.getElementById(`count${i}`).innerText = v;
        const percent = total === 0 ? 0 : (v / total) * 100;
        document.getElementById(`bar${i}`).style.width = percent + "%";
    });
}

updateResults();
