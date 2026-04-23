let tasks = JSON.parse(localStorage.getItem("dailyTasks")) || [];

function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((t, index) => {
        list.innerHTML += `
            <li>
                <span class="${t.done ? 'task-done' : ''}">
                    ⏰ ${t.time} - ${t.task}
                </span>
                <div class="actions">
                    <button class="done" onclick="toggleDone(${index})">✓</button>
                    <button class="delete" onclick="deleteTask(${index})">✕</button>
                </div>
            </li>
        `;
    });
}

function addTask() {
    const time = document.getElementById("time").value;
    const task = document.getElementById("task").value;

    if (!time || !task) {
        alert("Please enter time and task");
        return;
    }

    tasks.push({ time, task, done: false });
    localStorage.setItem("dailyTasks", JSON.stringify(tasks));

    document.getElementById("time").value = "";
    document.getElementById("task").value = "";

    renderTasks();
}

function toggleDone(index) {
    tasks[index].done = !tasks[index].done;
    localStorage.setItem("dailyTasks", JSON.stringify(tasks));
    renderTasks();
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("dailyTasks", JSON.stringify(tasks));
    renderTasks();
}

renderTasks();
