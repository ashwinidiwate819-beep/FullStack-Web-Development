const votes = {
    "Web Development": 0,
    "Data Science": 0,
    "AI & ML": 0,
    "Cyber Security": 0
};

function submitSurvey() {
    const options = document.getElementsByName("option");
    let selected = null;

    options.forEach(opt => {
        if (opt.checked) selected = opt.value;
    });

    if (!selected) {
        alert("Please select an option");
        return;
    }

    votes[selected]++;
    displayResults();
}

function displayResults() {
    const results = document.getElementById("results");
    results.innerHTML = "";

    for (let option in votes) {
        results.innerHTML += `<li>${option}: ${votes[option]} votes</li>`;
    }
}
