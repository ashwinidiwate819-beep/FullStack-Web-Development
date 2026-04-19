function addResult() {
    const roll = document.getElementById("roll").value;
    const name = document.getElementById("name").value;
    const marks = parseInt(document.getElementById("marks").value);
    const table = document.getElementById("resultTable");

    if (!roll || !name || isNaN(marks)) {
        alert("Please fill all fields");
        return;
    }

    let grade = "";
    let status = "";

    if (marks >= 75) grade = "A";
    else if (marks >= 60) grade = "B";
    else if (marks >= 40) grade = "C";
    else grade = "D";

    status = marks >= 40 ? "Pass" : "Fail";

    const row = `
        <tr>
            <td>${roll}</td>
            <td>${name}</td>
            <td>${marks}</td>
            <td>${grade}</td>
            <td class="${status === 'Pass' ? 'pass' : 'fail'}">${status}</td>
        </tr>
    `;

    table.innerHTML += row;

    document.getElementById("roll").value = "";
    document.getElementById("name").value = "";
    document.getElementById("marks").value = "";
}
