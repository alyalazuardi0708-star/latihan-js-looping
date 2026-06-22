let jumlah = 0;
let teks = "";

for(let i = 1; i <= 5; i += 2){
    jumlah += i;

    if(i < 5){
        teks += i + " + ";
    } else {
        teks += i;
    }
}

console.log(teks + " = " + jumlah);