const pdfInput = document.getElementById("pdfInput");
const fileList = document.getElementById("fileList");
const downloadLink = document.getElementById("downloadLink");

pdfInput.addEventListener("change", () => {
    fileList.innerHTML = "<b>Selected Files:</b><br>";
    Array.from(pdfInput.files).forEach((file, i) => {
        fileList.innerHTML += `${i + 1}. ${file.name}<br>`;
    });
});

async function mergePDFs() {
    const files = pdfInput.files;
    if (files.length < 2) {
        alert("Please select at least two PDF files");
        return;
    }

    const mergedPdf = await PDFLib.PDFDocument.create();

    for (const file of files) {
        const bytes = await file.arrayBuffer();
        const pdf = await PDFLib.PDFDocument.load(bytes);
        const pages = await mergedPdf.copyPages(pdf, pdf.getPageIndices());
        pages.forEach(page => mergedPdf.addPage(page));
    }

    const mergedBytes = await mergedPdf.save();
    const blob = new Blob([mergedBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);

    downloadLink.href = url;
    downloadLink.style.display = "inline-block";
}
