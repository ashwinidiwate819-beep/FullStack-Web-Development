function addPost() {
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;

    if (title === "" || content === "") {
        alert("Please fill all fields");
        return;
    }

    let postDiv = document.createElement("div");
    postDiv.className = "post";

    postDiv.innerHTML = `
        <h3>${title}</h3>
        <p>${content}</p>
        <small>Posted on: ${new Date().toLocaleDateString()}</small>
    `;

    document.getElementById("posts").appendChild(postDiv);

    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
}
