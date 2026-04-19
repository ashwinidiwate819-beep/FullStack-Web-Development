const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

function searchFAQ() {
    const search = document.getElementById("search").value.toLowerCase();
    faqs.forEach(faq => {
        const text = faq.innerText.toLowerCase();
        faq.style.display = text.includes(search) ? "block" : "none";
    });
}
