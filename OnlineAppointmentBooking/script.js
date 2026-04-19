document.getElementById("appointmentForm").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("successMessage").innerText =
        "✅ Appointment booked successfully! We will contact you soon.";

    this.reset();
});
















