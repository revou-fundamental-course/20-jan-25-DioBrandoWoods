function hasilBMI() {
    const berat = parseFloat(document.getElementById("berat").value);
    const tinggiCm = parseFloat(document.getElementById("tinggi").value);
    const hasilDiv = document.getElementById("hasil");

    if (isNaN(berat) || isNaN(tinggiCm) || berat <= 0 || tinggiCm <= 0) {
        hasilDiv.innerHTML = "<p style='color: red;'>Silahkan masukan berat badan dan tinggi badan yang valid.</p>";return;
    }

    const tinggiM = tinggiM / 100;

    const bmi = berat / (tinggiM * tinggiM);

    let status = "";
    let message = "";
    let risks = [];

    if (bmi <18.5) {
        status = "Kekurangan berat badan";
        message = "Anda berada dalam kategori berat badan kurang. Disarankan untuk meningkatkan asupan kalori...";
        risks = ["Anemia", "Osteoporosis", "Gangguan Imun", "Masalah Kesuburan"]; 
        } else if (bmi >= 18.5 && bmi <= 24.9) {
        status = "Normal (Ideal)"; 
        message = "Anda berada dalam kategori berat badan normal. Pertahankan pola makan sehat.."; risks = []; 
        } else if (bmi >= 25.0 && bmi <= 29.9) {
        status = "Kelebihan berat badan"; message = "Anda berada dalam kategori overberat. Disarankan untuk mengatur pola makan..."; 
        risks = ["Diabetes", "Hipertensi", "Sakit Jantung"]; 
        } else if (bmi >= 30.0) {
        status = "Kegemukan (Obesitas)"; message = "Anda berada dalan kategori obesitas. Disarankan untuk berkonsultasi dengan tenaga medis..."; 
        risks = ["Penyakit antung", "Diabetes Tipe 2", "Stroke", "Hipertensi", "Sleep Apnea"];
        }

        let risksHTML = "";
        if (risks.length > 0) {
            risksHTML = `
            <div class="info-selection">
            <h3>Risiko Kesehatan Terkait</h3>
            <ul>
                ${risks.map(risk => `<li>${risk}</li>`).join(``)}
            </ul>
            </div>
            `;
        }

        hasilDiv.innerHTML = `
        <h2>Status BMI Anda</h2>
        <p><strong>${bmi.toFixed(1)}</strong> - ${status}</p>
        <p>${message}</p>
        <a href="#" target="blank">Konsultasi Ahli Gizi</a>
        ${risksHTML} <!-- Menampilkan risiko kesehatan jika ada -->`;
} 

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("hitungBMI").addEventListener("click", hasilBMI);
});