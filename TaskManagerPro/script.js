let tasks = JSON.parse(localStorage.getItem("smartTasks")) || [];
const list = document.getElementById("taskList");
const bar = document.getElementById("bar");
const count = document.getElementById("count");

document.getElementById("themeToggle").onclick = () =>
  document.body.classList.toggle("dark");

function addTask() {
  const text = taskText.value;
  if (!text) return;

  tasks.push({
    id: Date.now(),
    text,
    priority: priority.value.toLowerCase(),
    date: dueDate.value,
    done: false
  });

  save();
}

function toggle(id) {
  tasks = tasks.map(t => t.id === id ? { ...t, done: !t.done } : t);
  save();
}

function del(id) {
  tasks = tasks.filter(t => t.id !== id);
  save();
}

document.getElementById("search").oninput = e => render(e.target.value);

function save() {
  localStorage.setItem("smartTasks", JSON.stringify(tasks));
  render();
}

function render(filter = "") {
  list.innerHTML = "";
  const visible = tasks.filter(t => t.text.toLowerCase().includes(filter.toLowerCase()));

  visible.forEach(t => {
    const li = document.createElement("li");
    li.className = `${t.priority} ${t.done ? "done" : ""}`;
    li.innerHTML = `
      <input type="checkbox" ${t.done ? "checked" : ""} onchange="toggle(${t.id})">
      ${t.text} <small>(${t.date || "No date"})</small>
      <span style="float:right;cursor:pointer" onclick="del(${t.id})">🗑</span>
    `;
    list.appendChild(li);
  });

  const doneCount = tasks.filter(t => t.done).length;
  count.innerText = `Completed ${doneCount} / ${tasks.length}`;
  bar.style.width = tasks.length ? (doneCount / tasks.length) * 100 + "%" : "0%";
}

render();
