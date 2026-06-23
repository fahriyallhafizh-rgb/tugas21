const prompt = require('prompt-sync')({ sigint: true });

const kode = prompt("Masukkan kode 5 digit: ");

if (kode === '12345') {
  console.log("You are authenticated");
} else {
  console.log("You have no access");
}