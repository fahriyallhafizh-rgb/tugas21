const prompt = require('prompt-sync')({ sigint: true });

const r = Number(prompt("Masukkan jari-jari bola: "));

if (isNaN(r) || r <= 0) {
  console.log("Input tidak valid. Masukkan angka positif.");
} else {
  const volume = (4 / 3) * Math.PI * Math.pow(r, 3);
  const surfaceArea = 4 * Math.PI * Math.pow(r, 2);

  console.log(`\nHasil perhitungan untuk r = ${r}:`);
  console.log(`Volume           : ${volume.toFixed(2)}`);
  console.log(`Luas permukaan   : ${surfaceArea.toFixed(2)}`);
}