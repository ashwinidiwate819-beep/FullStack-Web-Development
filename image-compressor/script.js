const imageInput = document.getElementById("imageInput");
const qualitySlider = document.getElementById("quality");
const qualityValue = document.getElementById("qualityValue");
const canvas = document.getElementById("canvas");
const downloadLink = document.getElementById("downloadLink");

qualitySlider.addEventListener("input", () => {
    qualityValue.innerText = qualitySlider.value + "%";
});

function compressImage() {
    const file = imageInput.files[0];
    if (!file) {
        alert("Please select an image");
        return;
    }

    const reader = new FileReader();
    const img = new Image();

    reader.onload = e => img.src = e.target.result;

    img.onload = () => {
        const ctx = canvas.getContext("2d");
        canvas.width = img.width;
        canvas.height = img.height;

        ctx.drawImage(img, 0, 0);

        const quality = qualitySlider.value / 100;

        canvas.toBlob(blob => {
            const url = URL.createObjectURL(blob);
            downloadLink.href = url;
            downloadLink.style.display = "block";
        }, "image/jpeg", quality);

        canvas.style.display = "block";
    };

    reader.readAsDataURL(file);
}
