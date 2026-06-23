let nama = prompt("Masukkan nama siswa:");
let nilai = parseFloat(prompt("Masukkan nilai siswa (0-100):"));

let grade;

if (nilai >= 90 && nilai <= 100) {
    grade = "A";
} else if (nilai >= 80) {
    grade = "B";
} else if (nilai >= 70) {
    grade = "C";
} else if (nilai >= 60) {
    grade = "D";
} else if (nilai >= 0) {
    grade = "E";
} else {
    grade = "Nilai tidak valid";
}

console.log("Nama:", nama);
console.log("Nilai:", nilai);
console.log("Grade:", grade);

document.write("Nama: " + nama + "<br>");
document.write("Nilai: " + nilai + "<br>");
document.write("Grade: " + grade + "<br>");