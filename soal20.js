const prompt = require('prompt-sync')({ sigint: true });

const ch = prompt("Masukkan satu karakter (A–Z): ");

if (!/^[a-zA-Z]$/.test(ch)) {
  console.log("Input bukan berupa huruf.");
} else if (/^[aeiouAEIOU]$/.test(ch)) {
  console.log(`${ch} adalah huruf vokal.`);
} else {
  console.log(`${ch} adalah huruf konsonan.`);
}