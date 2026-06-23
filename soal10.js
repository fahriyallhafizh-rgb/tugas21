const prompt = require('prompt-sync')({ sigint: true });

const judul = prompt("Judul Buku         : ");
const penerbit = prompt("Penerbit           : ");
const jumlahStr = prompt("Jumlah Buku        : ");
const tanggal = prompt("Tanggal Pembelian  : ");

const jumlah = Number(jumlahStr);

if (!judul || !penerbit || isNaN(jumlah) || !tanggal) {
  console.log("Input tidak valid. Pastikan semua diisi dengan benar.");
} else {
  console.log(`Judul Buku : ${judul}`);
  console.log(`Penerbit   : ${penerbit}`);
  console.log(`Jumlah Buku: ${jumlah}`);
  console.log(`Tanggal Pembelian: ${tanggal}`);
}