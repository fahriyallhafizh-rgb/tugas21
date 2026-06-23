const prompt = require('prompt-sync')({ sigint: true });



const input = prompt("Masukkan juara (1/2/3): ");

const juara = Number(input);



if (juara === 1) {

  console.log("Selamat Anda Juara 1");

} else if (juara === 2) {

  console.log("Selamat Anda Juara 2");

} else if (juara === 3) {

  console.log("Selamat Anda Juara 3");

} else {

  console.log("Inputan Anda Salah!");

}