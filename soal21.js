const prompt = require('prompt-sync')({ sigint: true });

const name = prompt("Masukkan nama siswa: ");
const nilaiStr = prompt("Masukkan nilai (0–100): ");
const nilai = Number(nilaiStr);

if (!name || isNaN(nilai) || nilai < 0 || nilai > 100) {
  console.log("Input tidak valid. Nama tidak boleh kosong, nilai harus angka antara 0–100.");
} else {
  let grade;
  if (nilai >= 100) {
    grade = 'A';
  } else if (nilai >= 90) {
    grade = 'B';
  } else if (nilai >= 80) {
    grade = 'C';
  } else if (nilai >= 70) {
    grade = 'D';
  } else {
    grade = 'E';
  }

  console.log(`\nNama  : ${name}`);
  console.log(`Nilai : ${nilai}`);
  console.log(`Grade : ${grade}`);
}