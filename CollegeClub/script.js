function addClub() {
    const name = document.getElementById("clubName").value;
    const head = document.getElementById("clubHead").value;
    const category = document.getElementById("clubCategory").value;
    const list = document.getElementById("clubList");

    if (!name || !head || !category) {
        alert("Please fill all fields");
        return;
    }

    const card = document.createElement("div");
    card.className = "club";
    card.innerHTML = `
        <h3>${name}</h3>
        <span><strong>Head:</strong> ${head}</span>
        <span><strong>Category:</strong> ${category}</span>
    `;

    list.appendChild(card);

    document.getElementById("clubName").value = "";
    document.getElementById("clubHead").value = "";
    document.getElementById("clubCategory").value = "";
}
