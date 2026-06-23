const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Masukkan namamu: ", (name) => {
  console.log(`Halo ${name}?  Wish you luck`);
  rl.close();
});