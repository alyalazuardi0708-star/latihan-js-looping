let urutannilai = [80, 90, 75, 85, 100];
let total = 0;
let banyakangka = urutannilai.length; 

for (let i = 0; i < banyakangka; i++) {
    total += urutannilai[i]; 
}

let ratarata = total / banyakangka;

console.log("Daftar Nilai : " + urutannilai.join(", "));
console.log("Jumlah       : " + total);
console.log("Rata-rata    : " + ratarata);