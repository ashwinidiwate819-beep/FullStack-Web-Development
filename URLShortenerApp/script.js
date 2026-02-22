const urlForm = document.getElementById('urlForm');
const longUrlInput = document.getElementById('longUrl');
const resultDiv = document.getElementById('result');
const shortUrlInput = document.getElementById('shortUrl');
const copyBtn = document.getElementById('copyBtn');

// Function to generate random short code
function generateShortCode(length = 6) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let code = "";
    for (let i = 0; i < length; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

// Handle form submit
urlForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const longUrl = longUrlInput.value.trim();
    if (!longUrl) return;

    const shortCode = generateShortCode();
    const shortUrl = `${window.location.origin}/${shortCode}`; // Simulated short URL

    shortUrlInput.value = shortUrl;
    resultDiv.classList.remove('hide');
});

// Copy button functionality
copyBtn.addEventListener('click', () => {
    shortUrlInput.select();
    shortUrlInput.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Short URL copied to clipboard!");
});
