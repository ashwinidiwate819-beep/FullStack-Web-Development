let notes = JSON.parse(localStorage.getItem("notes")) || [];

displayNotes();

function addNote() {
  const title = document.getElementById("title").value;
  const content = document.getElementById("content").value;

  if (title === "" || content === "") {
    alert("Please enter title and content");
    return;
  }

  notes.push({ title, content });
  localStorage.setItem("notes", JSON.stringify(notes));

  document.getElementById("title").value = "";
  document.getElementById("content").value = "";

  displayNotes();
}

function displayNotes() {
  const notesDiv = document.getElementById("notes");
  notesDiv.innerHTML = "";

  notes.forEach((note, index) => {
    notesDiv.innerHTML += `
      <div class="note">
        <h3>${note.title}</h3>
        <p>${note.content}</p>
        <button class="edit" onclick="editNote(${index})">Edit</button>
        <button class="delete" onclick="deleteNote(${index})">Delete</button>
      </div>
    `;
  });
}

function deleteNote(index) {
  notes.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notes));
  displayNotes();
}

function editNote(index) {
  document.getElementById("title").value = notes[index].title;
  document.getElementById("content").value = notes[index].content;
  deleteNote(index);
}

function searchNotes() {
  const searchValue = document.getElementById("search").value.toLowerCase();
  const noteCards = document.querySelectorAll(".note");

  noteCards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(searchValue) ? "block" : "none";
  });
}
