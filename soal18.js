const prompt = require('prompt-sync')({ sigint: true });

const inputStr = prompt("Masukkan bilangan bulat: ");
const angka = parseInt(inputStr, 10);

if (isNaN(angka)) {
  console.log("Input tidak valid. Mohon masukkan bilangan bulat.");
} else if (angka % 7 === 0) {
  console.log(`${angka} adalah kelipatan dari 7.`);
} else {
  console.log("Anda belum beruntung");
}