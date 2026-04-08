let currentProduct = "";
let storage = JSON.parse(localStorage.getItem("reviewData")) || {};

function loadProduct(product) {
    currentProduct = product;
    document.getElementById("title").innerText = product + " Reviews";
    renderReviews();
}

function addReview() {
    let name = document.getElementById("name").value;
    let rating = document.getElementById("rating").value;
    let comment = document.getElementById("comment").value;

    if (!currentProduct || !name || !rating || !comment) {
        alert("Fill all fields");
        return;
    }

    if (!storage[currentProduct]) {
        storage[currentProduct] = [];
    }

    storage[currentProduct].push({ name, rating, comment });

    localStorage.setItem("reviewData", JSON.stringify(storage));

    document.getElementById("name").value = "";
    document.getElementById("rating").value = "";
    document.getElementById("comment").value = "";

    renderReviews();
}

function renderReviews() {
    let box = document.getElementById("timeline");
    box.innerHTML = "";

    if (!storage[currentProduct]) return;

    storage[currentProduct].forEach(r => {
        box.innerHTML += `
            <div class="review">
                <strong>${r.name}</strong> | Rating: ${r.rating}/5<br>
                ${r.comment}
            </div>
        `;
    });
}
