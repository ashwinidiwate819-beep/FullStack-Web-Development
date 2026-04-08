function filterMenu(category) {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
