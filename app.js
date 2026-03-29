let accumulatedText = "";
let sessionImages = [];

// 1. GESTIÓN DE CÁMARA E IMAGEN
function handleCapture(e) {
    const file = e.target.files[0];
    if (!file) return;

    const canvas = document.getElementById('mainCanvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        sessionImages.push(canvas.toDataURL('image/jpeg', 0.8));
        document.getElementById('ocrStatus').innerText = "Imagen cargada. Pulsa Analizar.";
    };
    img.src = URL.createObjectURL(file);
}

// 2. OCR Y RESUMEN INTELIGENTE
async function runSmartOCR() {
    const status = document.getElementById('ocrStatus');
    status.innerText = "⏳ Leyendo con Tesseract...";
    
    const canvas = document.getElementById('mainCanvas');
    const worker = await Tesseract.createWorker('spa');
    const { data: { text } } = await worker.recognize(canvas);
    await worker.terminate();

    accumulatedText += "\n" + text;
    const smartOutput = generateSmartSchema(text);
    
    document.getElementById('resultCard').style.display = 'block';
    document.getElementById('smartSummary').innerHTML += smartOutput;
    status.innerText = "✅ Analizado correctamente";
}

// ALGORITMO DE ESQUEMATIZACIÓN
function generateSmartSchema(rawText) {
    let html = `<h4>Nueva Sección: ${new Date().toLocaleTimeString()}</h4><ul>`;
    const lines = rawText.split('\n').filter(l => l.trim().length > 10);

    lines.forEach(line => {
        // Detectar definiciones (contienen "es", "son", ":")
        if (line.includes(":") || line.includes(" es ") || line.includes(" son ")) {
            html += `<li style="color:#0078d4"><b>Concepto:</b> ${line}</li>`;
        } 
        // Detectar fechas o números
        else if (/\d{2,4}/.test(line)) {
            html += `<li>📅 <i>Dato:</i> ${line}</li>`;
        }
        // Resto como puntos clave
        else {
            html += `<li>• ${line}</li>`;
        }
    });

    return html + "</ul><hr>";
}

// 3. GENERACIÓN DE PDF Y ENVÍO
async function saveAndSend() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    const tema = document.getElementById('temaSel').value;

    doc.setFontSize(22);
    doc.text(`TEMA: ${tema.replace('_', ' ')}`, 20, 20);
    
    doc.setFontSize(12);
    const summaryText = document.getElementById('smartSummary').innerText;
    const splitText = doc.splitTextToSize(summaryText, 180);
    doc.text(splitText, 20, 40);

    // Adjuntar imágenes en páginas nuevas
    sessionImages.forEach((img, i) => {
        doc.addPage();
        doc.addImage(img, 'JPEG', 10, 10, 190, 0);
    });

    const pdfBlob = doc.output('blob');
    const file = new File([pdfBlob], `${tema}.pdf`, { type: "application/pdf" });

    if (navigator.share) {
        await navigator.share({
            files: [file],
            title: `Resumen de ${tema}`,
            text: `Enviado a mbgesp@gmail.com y jamanteiga@gmail.com`
        });
    } else {
        doc.save(`${tema}.pdf`);
    }
}