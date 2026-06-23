const prompt = require('prompt-sync')({ sigint: true });

const x = Number(prompt("Masukkan angka pertama (x): "));
const y = Number(prompt("Masukkan angka kedua (y): "));
const z = Number(prompt("Masukkan angka ketiga (z): "));

if ([x, y, z].some(isNaN)) {
  console.log("Input tidak valid. Masukkan angka bulat semua.");
} else {
  const terbesar = Math.max(x, y, z);
  const terkecil = Math.min(x, y, z);
  console.log(`Nilai terbesar  : ${terbesar}`);
  console.log(`Nilai terkecil  : ${terkecil}`);
}