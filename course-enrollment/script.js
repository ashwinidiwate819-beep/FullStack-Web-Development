let enrollments = JSON.parse(localStorage.getItem("enrollments")) || [];

function enroll(course) {
    document.getElementById("selectedCourse").value = course;
    document.getElementById("formSection").scrollIntoView({ behavior: "smooth" });
}

function submitEnrollment() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let course = document.getElementById("selectedCourse").value;

    if (!name || !email || !course) {
        alert("Please fill all details");
        return;
    }

    enrollments.push({ name, email, course });
    localStorage.setItem("enrollments", JSON.stringify(enrollments));

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("selectedCourse").value = "";

    displayEnrollments();
}

function displayEnrollments() {
    let list = document.getElementById("enrolledList");
    list.innerHTML = "";

    enrollments.forEach(e => {
        list.innerHTML += `
            <div class="enrolled-card">
                <strong>${e.name}</strong><br>
                ${e.email}<br>
                <em>${e.course}</em>
            </div>
        `;
    });
}

displayEnrollments();
