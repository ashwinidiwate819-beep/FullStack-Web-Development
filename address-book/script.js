let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

function displayContacts() {
    const list = document.getElementById("contactList");
    list.innerHTML = "";

    contacts.forEach((contact, index) => {
        list.innerHTML += `
            <tr>
                <td>${contact.name}</td>
                <td>${contact.phone}</td>
                <td>${contact.email}</td>
                <td>${contact.address}</td>
                <td><button class="delete-btn" onclick="deleteContact(${index})">Delete</button></td>
            </tr>
        `;
    });
}

function addContact() {
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const address = document.getElementById("address").value;

    if (!name || !phone || !email || !address) {
        alert("Please fill all fields");
        return;
    }

    contacts.push({ name, phone, email, address });
    localStorage.setItem("contacts", JSON.stringify(contacts));

    document.querySelectorAll("input").forEach(input => input.value = "");
    displayContacts();
}

function deleteContact(index) {
    contacts.splice(index, 1);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    displayContacts();
}

displayContacts();
