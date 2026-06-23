const prompt = require('prompt-sync')({ sigint: true });

const p = Number(prompt("Masukkan panjang: "));
const l = Number(prompt("Masukkan lebar: "));

if (isNaN(p) || isNaN(l)) {
  console.log("Input tidak valid. Mohon masukkan angka.");
} else {
  const luas = p * l;
  const keliling = 2 * (p + l);
  console.log(`Luas = ${luas}`);
  console.log(`Keliling = ${keliling}`);
}