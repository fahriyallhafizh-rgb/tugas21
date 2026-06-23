const prompt = require('prompt-sync')({ sigint: true });

const mplb3 = Number(prompt("Jumlah siswa X MPLB 3: "));
const mplb4 = Number(prompt("Jumlah siswa X MPLB 4: "));
const mplb1 = Number(prompt("Jumlah siswa X MPLB 1: "));
const mplb2 = Number(prompt("Jumlah siswa X MPLB 2: "));

if ([mplb3, mplb4, mplb1, mplb2].some(isNaN)) {
  console.log("Input tidak valid. Pastikan memasukkan angka untuk semua data.");
} else {
  const total = mplb3 + mplb4 + mplb1 + mplb2;
  console.log(`\nTotal jumlah siswa: ${total}`);
}