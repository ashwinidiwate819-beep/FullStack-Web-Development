let notices = JSON.parse(localStorage.getItem("notices")) || [];

function renderNotices() {
    const board = document.getElementById("board");
    board.innerHTML = "";

    notices.forEach((n, index) => {
        board.innerHTML += `
            <div class="notice">
                <button onclick="deleteNotice(${index})">×</button>
                <h3>${n.title}</h3>
                <small>📅 ${n.date}</small>
                <p>${n.content}</p>
            </div>
        `;
    });
}

function addNotice() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    if (!title || !content) {
        alert("Please fill all fields");
        return;
    }

    notices.unshift({
        title,
        content,
        date: new Date().toLocaleDateString()
    });

    localStorage.setItem("notices", JSON.stringify(notices));
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
    renderNotices();
}

function deleteNotice(index) {
    notices.splice(index, 1);
    localStorage.setItem("notices", JSON.stringify(notices));
    renderNotices();
}

renderNotices();
