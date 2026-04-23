let forumPosts = JSON.parse(localStorage.getItem("forumPosts")) || [];

function renderPosts() {
    const postsDiv = document.getElementById("posts");
    postsDiv.innerHTML = "";

    forumPosts.forEach((post, index) => {
        let repliesHTML = "";
        post.replies.forEach(r => {
            repliesHTML += `<div class="reply">💬 <b>${r.user}</b>: ${r.text}</div>`;
        });

        postsDiv.innerHTML += `
            <div class="post">
                <h3>${post.title}</h3>
                <small>Posted by ${post.user}</small>
                <p>${post.message}</p>

                ${repliesHTML}

                <div class="reply-box">
                    <input type="text" id="reply-${index}" placeholder="Write a reply">
                    <button onclick="addReply(${index})">Reply</button>
                </div>
            </div>
        `;
    });
}

function addPost() {
    const user = document.getElementById("username").value;
    const title = document.getElementById("title").value;
    const message = document.getElementById("message").value;

    if (!user || !title || !message) {
        alert("Please fill all fields");
        return;
    }

    forumPosts.push({
        user,
        title,
        message,
        replies: []
    });

    localStorage.setItem("forumPosts", JSON.stringify(forumPosts));

    document.querySelectorAll("input, textarea").forEach(e => e.value = "");
    renderPosts();
}

function addReply(index) {
    const replyInput = document.getElementById(`reply-${index}`);
    if (!replyInput.value) return;

    forumPosts[index].replies.push({
        user: "Guest",
        text: replyInput.value
    });

    localStorage.setItem("forumPosts", JSON.stringify(forumPosts));
    renderPosts();
}

renderPosts();
