function addResource() {
    const title = document.getElementById("title").value;
    const category = document.getElementById("category").value;
    const link = document.getElementById("link").value;
    const list = document.getElementById("resourceList");

    if (!title || !category || !link) {
        alert("Please fill all fields");
        return;
    }

    const card = document.createElement("div");
    card.className = "resource";
    card.innerHTML = `
        <h3>${title}</h3>
        <span><strong>Category:</strong> ${category}</span>
        <a href="${link}" target="_blank">Open Resource 🔗</a>
    `;

    list.appendChild(card);

    document.getElementById("title").value = "";
    document.getElementById("category").value = "";
    document.getElementById("link").value = "";
}
