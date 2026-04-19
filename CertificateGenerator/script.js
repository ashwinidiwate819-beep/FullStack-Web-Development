function generate() {
    const name = document.getElementById("name").value;
    const course = document.getElementById("course").value;
    const date = document.getElementById("date").value;

    if (!name || !course || !date) {
        alert("Please fill all fields");
        return;
    }

    document.getElementById("cname").innerText = name;
    document.getElementById("ccourse").innerText = course;
    document.getElementById("cdate").innerText = date;
}
