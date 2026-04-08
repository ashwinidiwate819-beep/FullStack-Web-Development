let subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];

function subscribe() {
    let email = document.getElementById("email").value;
    let msg = document.getElementById("msg");

    if (!validateEmail(email)) {
        msg.innerText = "❌ Please enter a valid email";
        msg.style.color = "yellow";
        return;
    }

    if (subscribers.includes(email)) {
        msg.innerText = "⚠️ Email already subscribed";
        msg.style.color = "orange";
        return;
    }

    subscribers.push(email);
    localStorage.setItem("subscribers", JSON.stringify(subscribers));

    msg.innerText = "✅ Subscription successful!";
    msg.style.color = "lightgreen";
    document.getElementById("email").value = "";

    displaySubscribers();
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function displaySubscribers() {
    let list = document.getElementById("list");
    list.innerHTML = "";

    subscribers.forEach(email => {
        list.innerHTML += `<div class="subscriber">${email}</div>`;
    });
}

displaySubscribers();
