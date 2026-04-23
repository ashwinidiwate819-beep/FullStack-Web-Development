let alarmTime = localStorage.getItem("alarmTime");
const alarmSound = document.getElementById("alarmSound");

function updateClock() {
    const now = new Date();

    let h = String(now.getHours()).padStart(2, '0');
    let m = String(now.getMinutes()).padStart(2, '0');
    let s = String(now.getSeconds()).padStart(2, '0');

    document.getElementById("clock").innerText = `${h}:${m}:${s}`;
    document.getElementById("date").innerText = now.toDateString();

    if (alarmTime === `${h}:${m}`) {
        alarmSound.play();
        document.getElementById("status").innerText = "⏰ Alarm Ringing!";
    }
}

function setAlarm() {
    alarmTime = document.getElementById("alarmTime").value;
    if (!alarmTime) {
        alert("Please select alarm time");
        return;
    }
    localStorage.setItem("alarmTime", alarmTime);
    document.getElementById("status").innerText = `Alarm set for ${alarmTime}`;
}

function stopAlarm() {
    alarmSound.pause();
    alarmSound.currentTime = 0;
    document.getElementById("status").innerText = "Alarm stopped";
}

setInterval(updateClock, 1000);
updateClock();
