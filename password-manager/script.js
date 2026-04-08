const MASTER_PASSWORD = "admin123"; // demo master password
let passwords = JSON.parse(localStorage.getItem("passwords")) || [];

function login() {
    let input = document.getElementById("masterPass").value;

    if (input === MASTER_PASSWORD) {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("app").style.display = "block";
        showPasswords();
    } else {
        alert("Incorrect Master Password");
    }
}

function logout() {
    location.reload();
}

function savePassword() {
    let site = document.getElementById("site").value;
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (!site || !user || !pass) {
        alert("All fields required");
        return;
    }

    passwords.push({ site, user, pass });
    localStorage.setItem("passwords", JSON.stringify(passwords));

    document.getElementById("site").value = "";
    document.getElementById("username").value = "";
    document.getElementById("password").value = "";

    showPasswords();
}

function showPasswords() {
    let list = document.getElementById("passwordList");
    list.innerHTML = "";

    passwords.forEach((p, i) => {
        list.innerHTML += `
            <div class="entry">
                <button class="delete" onclick="deletePass(${i})">Delete</button>
                <span><strong>Site:</strong> ${p.site}</span>
                <span><strong>User:</strong> ${p.user}</span>
                <span><strong>Password:</strong> ${p.pass}</span>
            </div>
        `;
    });
}

function deletePass(index) {
    passwords.splice(index, 1);
    localStorage.setItem("passwords", JSON.stringify(passwords));
    showPasswords();
}
