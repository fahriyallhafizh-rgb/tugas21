const prompt = require('prompt-sync')({ sigint: true });

const rpl1 = Number(prompt("Jumlah siswa X MPLB 3: "));
const rpl2 = Number(prompt("Jumlah siswa X MPLB 4: "));
const tkj1 = Number(prompt("Jumlah siswa X MPLB 1: "));
const tkj2 = Number(prompt("Jumlah siswa X MPLB 2: "));

if ([rpl1, rpl2, tkj1, tkj2].some(isNaN)) {
  console.log("Input tidak valid. Pastikan memasukkan angka untuk semua data.");
} else {
  const total = rpl1 + rpl2 + tkj1 + tkj2;
  console.log(`\nTotal jumlah siswa: ${total}`);
}