let fotosTema = []; // Array para agrupar fotos en un solo PDF

async function procesarOCR() {
    const status = document.getElementById('statusOCR');
    status.innerText = "⏳ Reconociendo texto...";
    
    const canvas = document.getElementById('mainCanvas');
    
    // Ejecutar Tesseract Offline
    const worker = await Tesseract.createWorker();
    await worker.loadLanguage('spa');
    await worker.initialize('spa');
    const { data: { text } } = await worker.recognize(canvas);
    await worker.terminate();

    document.getElementById('resumenArea').style.display = 'block';
    const resumen = generarResumen(text);
    document.getElementById('textoResumen').innerText = resumen;
    status.innerText = "✅ Texto extraído";
}

function generarResumen(texto) {
    // Lógica para crear esquema/resumen
    const lineas = texto.split('\n').filter(l => l.length > 5);
    return "ESQUEMA DE ESTUDIO:\n\n• " + lineas.slice(0, 5).join('\n• ');
}

async function finalizarTema() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const tema = document.getElementById('temaSel').value;

    doc.text(`Tema: ${tema}`, 10, 10);
    doc.text(document.getElementById('textoResumen').innerText, 10, 20);
    
    // Aquí se añadirían las imágenes capturadas
    
    const pdfBlob = doc.output('blob');
    const file = new File([pdfBlob], `${tema}.pdf`, { type: "application/pdf" });

    // Compartir / Enviar por Email
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
            files: [file],
            title: `Resumen: ${tema}`,
            text: `Envío a mbgesp@gmail.com y jamanteiga@gmail.com`
        });
    } else {
        doc.save(`${tema}.pdf`);
    }
}