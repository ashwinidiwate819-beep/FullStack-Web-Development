function addDonor() {
    const name = document.getElementById("name").value;
    const group = document.getElementById("group").value;
    const city = document.getElementById("city").value;
    const contact = document.getElementById("contact").value;

    if (!name || !group || !city || !contact) {
        alert("Please fill all details");
        return;
    }

    const donorList = document.getElementById("donorList");

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <strong>${name}</strong>
        <span class="group">Blood Group: ${group}</span>
        <span>City: ${city}</span>
        <span>Contact: ${contact}</span>
    `;

    donorList.appendChild(card);

    document.getElementById("name").value = "";
    document.getElementById("group").value = "";
    document.getElementById("city").value = "";
    document.getElementById("contact").value = "";
}
