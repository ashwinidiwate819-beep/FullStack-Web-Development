function sendMessage() {
    const input = document.getElementById("messageInput");
    const messages = document.getElementById("messages");

    if (input.value.trim() === "") return;

    // Sent message
    const msg = document.createElement("div");
    msg.classList.add("message", "sent");
    msg.innerHTML = `
        ${input.value}
        <div class="time">${new Date().toLocaleTimeString()}</div>
    `;
    messages.appendChild(msg);

    input.value = "";
    messages.scrollTop = messages.scrollHeight;

    // Auto reply
    setTimeout(() => {
        const reply = document.createElement("div");
        reply.classList.add("message", "received");
        reply.innerHTML = `
           Hello broo👍
            <div class="time">${new Date().toLocaleTimeString()}</div>
        `;
        messages.appendChild(reply);
        messages.scrollTop = messages.scrollHeight;
    }, 1000);
}
