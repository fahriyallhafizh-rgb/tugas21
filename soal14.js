const prompt = require('prompt-sync')({ sigint: true });

const input = prompt("Masukkan sebuah angka: ");
const angka = Number(input);

if (!isNaN(angka) && angka > 100) {
  console.log("Nilai kamu sempurna!");
}