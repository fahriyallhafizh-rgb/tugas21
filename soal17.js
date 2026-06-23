const prompt = require('prompt-sync')({ sigint: true });

const hargaStr = prompt("Masukkan total harga barang: ");
const harga = Number(hargaStr);

if (isNaN(harga) || harga < 0) {
  console.log("Input tidak valid. Mohon masukkan angka valid.");
} else {
  const diskon = harga >= 300000 ? harga * 0.075 : 0;
  const totalBayar = harga - diskon;

  console.log(`\nHarga        : ${harga}`);
  console.log(`Diskon (7.5%): ${diskon}`);
  console.log(`Total Bayar  : ${totalBayar}`);
}