let diaryEntries = JSON.parse(localStorage.getItem("diary")) || [];

function addEntry() {
    let date = document.getElementById("date").value;
    let text = document.getElementById("entry").value;

    if (date === "" || text === "") {
        alert("Please fill all fields");
        return;
    }

    diaryEntries.push({ date, text });
    localStorage.setItem("diary", JSON.stringify(diaryEntries));

    document.getElementById("entry").value = "";
    displayEntries();
}

function displayEntries() {
    let entriesDiv = document.getElementById("entries");
    entriesDiv.innerHTML = "";

    diaryEntries.forEach((entry, index) => {
        entriesDiv.innerHTML += `
            <div class="entry">
                <button class="delete" onclick="deleteEntry(${index})">Delete</button>
                <small>${entry.date}</small>
                <p>${entry.text}</p>
            </div>
        `;
    });
}

function deleteEntry(index) {
    diaryEntries.splice(index, 1);
    localStorage.setItem("diary", JSON.stringify(diaryEntries));
    displayEntries();
}

displayEntries();
