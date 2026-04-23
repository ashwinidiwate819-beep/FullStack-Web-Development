let events = JSON.parse(localStorage.getItem("events")) || [];

function addEvent() {
    const name = document.getElementById("eventName").value;
    const date = document.getElementById("eventDate").value;

    if (!name || !date) {
        alert("Please enter event name and date");
        return;
    }

    events.push({ name, date });
    localStorage.setItem("events", JSON.stringify(events));

    document.getElementById("eventName").value = "";
    document.getElementById("eventDate").value = "";
    renderEvents();
}

function deleteEvent(index) {
    events.splice(index, 1);
    localStorage.setItem("events", JSON.stringify(events));
    renderEvents();
}

function renderEvents() {
    const container = document.getElementById("events");
    container.innerHTML = "";

    events.forEach((event, index) => {
        container.innerHTML += `
            <div class="event-card">
                <button class="delete" onclick="deleteEvent(${index})">×</button>
                <h3>${event.name}</h3>
                <div class="timer" id="timer-${index}">
                    <div class="time-box"><span>0</span>Days</div>
                    <div class="time-box"><span>0</span>Hours</div>
                    <div class="time-box"><span>0</span>Minutes</div>
                    <div class="time-box"><span>0</span>Seconds</div>
                </div>
            </div>
        `;
    });
}

function updateCountdowns() {
    events.forEach((event, index) => {
        const now = new Date().getTime();
        const eventTime = new Date(event.date).getTime();
        let diff = eventTime - now;

        if (diff < 0) diff = 0;

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        const timer = document.getElementById(`timer-${index}`);
        if (timer) {
            const spans = timer.querySelectorAll("span");
            spans[0].innerText = days;
            spans[1].innerText = hours;
            spans[2].innerText = minutes;
            spans[3].innerText = seconds;
        }
    });
}

renderEvents();
setInterval(updateCountdowns, 1000);
