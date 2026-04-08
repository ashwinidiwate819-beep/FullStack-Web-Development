let records = JSON.parse(localStorage.getItem("complaintData")) || [];

function submitComplaint() {
    let name = username.value;
    let email = useremail.value;
    let issue = issueSelect = document.getElementById("issue").value;
    let details = document.getElementById("details").value;

    if (!name || !email || !issue || !details) {
        alert("All fields required");
        return;
    }

    let complaint = {
        id: "CMP" + Math.floor(Math.random() * 100000),
        name,
        email,
        issue,
        details,
        status: "Open"
    };

    records.push(complaint);
    localStorage.setItem("complaintData", JSON.stringify(records));

    username.value = "";
    useremail.value = "";
    issueSelect.value = "";
    details.value = "";

    renderRecords();
}

function renderRecords() {
    recordsBox = document.getElementById("records");
    recordsBox.innerHTML = "";

    records.forEach(c => {
        recordsBox.innerHTML += `
            <div class="record">
                <span class="badge">${c.status}</span>
                <strong>ID:</strong> ${c.id}<br>
                <strong>${c.issue}</strong><br>
                <small>${c.name} | ${c.email}</small>
                <p>${c.details}</p>
            </div>
        `;
    });
}

renderRecords();
