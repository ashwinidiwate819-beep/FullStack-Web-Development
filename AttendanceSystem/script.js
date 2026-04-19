let students = JSON.parse(localStorage.getItem("attendance")) || [];
const list = document.getElementById("list");

function addStudent() {
  const name = studentName.value.trim();
  if (!name) return;

  students.push({ id: Date.now(), name, status: "Present" });
  save();
  studentName.value = "";
}

function toggleStatus(id) {
  students = students.map(s =>
    s.id === id
      ? { ...s, status: s.status === "Present" ? "Absent" : "Present" }
      : s
  );
  save();
}

function removeStudent(id) {
  students = students.filter(s => s.id !== id);
  save();
}

function save() {
  localStorage.setItem("attendance", JSON.stringify(students));
  render();
}

function render() {
  list.innerHTML = "";
  let present = 0, absent = 0;

  students.forEach(s => {
    if (s.status === "Present") present++;
    else absent++;

    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${s.name}</td>
      <td class="${s.status.toLowerCase()}">${s.status}</td>
      <td>
        <button onclick="toggleStatus(${s.id})">Toggle</button>
        <button onclick="removeStudent(${s.id})">❌</button>
      </td>
    `;
    list.appendChild(tr);
  });

  presentCount.innerText = "Present: " + present;
  absentCount.innerText = "Absent: " + absent;
}

render();
