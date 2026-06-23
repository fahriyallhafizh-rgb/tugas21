13

const prompt = require('prompt-sync')({ sigint: true });

const hargaStr = prompt("Harga barang: ");
const harga = Number(hargaStr);

if (isNaN(harga) || harga < 0) {
  console.log("Input tidak valid. Mohon masukkan angka valid.");
} else {
  const pajak = harga * 0.10;
  const fee = harga * 0.05;
  const totalBayar = harga + pajak + fee;

  console.log(`\nHarga makanan : ${harga}`);
  console.log(`Pajak          : ${pajak}`);
  console.log(`Fee            : ${fee}`);
  console.log(`Harga bayar    : ${totalBayar}`);
}