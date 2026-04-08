function generateResume() {
    document.getElementById("rName").innerText = name.value;
    document.getElementById("rEmail").innerText = email.value;
    document.getElementById("rPhone").innerText = phone.value;
    document.getElementById("rRole").innerText = role.value;
    document.getElementById("rSummary").innerText = summary.value;
    document.getElementById("rEducation").innerText = education.value;
    document.getElementById("rExperience").innerText = experience.value;

    let skillsArray = skills.value.split(",");
    let skillList = document.getElementById("rSkills");
    skillList.innerHTML = "";

    skillsArray.forEach(skill => {
        let li = document.createElement("li");
        li.innerText = skill.trim();
        skillList.appendChild(li);
    });
}
