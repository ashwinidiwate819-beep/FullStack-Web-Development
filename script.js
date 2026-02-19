function changeEmail() {
    let newEmail = prompt("Enter your new email:");
    if (newEmail) {
        document.getElementById("email").innerText = newEmail;
    }
}
