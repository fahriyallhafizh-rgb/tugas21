const prompt = require('prompt-sync')({ sigint: true });

const rpl1 = Number(prompt("Jumlah siswa X RPL 1: "));
const rpl2 = Number(prompt("Jumlah siswa X RPL 2: "));
const tkj1 = Number(prompt("Jumlah siswa X TKJ 1: "));
const tkj2 = Number(prompt("Jumlah siswa X TKJ 2: "));

if ([rpl1, rpl2, tkj1, tkj2].some(isNaN)) {
  console.log("Input tidak valid. Pastikan memasukkan angka untuk semua data.");
} else {
  const total = rpl1 + rpl2 + tkj1 + tkj2;
  console.log(`\nTotal jumlah siswa: ${total}`);
}