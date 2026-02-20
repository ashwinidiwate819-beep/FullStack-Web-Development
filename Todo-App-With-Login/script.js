let currentUser = localStorage.getItem("currentUser");

if (currentUser) {
  showTodo();
}

function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "" || password === "") {
    document.getElementById("loginMsg").innerText = "Fill all fields!";
    return;
  }

  localStorage.setItem("currentUser", username);
  showTodo();
}

function showTodo() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("todoBox").style.display = "block";
  loadTasks();
}

function logout() {
  localStorage.removeItem("currentUser");
  location.reload();
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value;

  if (task === "") return;

  let tasks = JSON.parse(localStorage.getItem(currentUser)) || [];
  tasks.push(task);
  localStorage.setItem(currentUser, JSON.stringify(tasks));

  taskInput.value = "";
  loadTasks();
}

function loadTasks() {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  let tasks = JSON.parse(localStorage.getItem(currentUser)) || [];

  tasks.forEach((task, index) => {
    taskList.innerHTML += `
      <li>
        ${task}
        <button onclick="deleteTask(${index})">X</button>
      </li>
    `;
  });
}

function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem(currentUser));
  tasks.splice(index, 1);
  localStorage.setItem(currentUser, JSON.stringify(tasks));
  loadTasks();
}
