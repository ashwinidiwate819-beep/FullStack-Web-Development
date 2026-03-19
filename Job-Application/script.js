document.getElementById("jobForm").addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("successMsg").innerText =
        "🎉 Application Submitted Successfully!";
    
    document.getElementById("jobForm").reset();
});
