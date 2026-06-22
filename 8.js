let jumlah = 0;
let teks = "";

for(let i = 2; i <= 10; i += 2){
    jumlah += i;
    
    if(i < 10){
        teks += i + " + ";
    } else {
        teks += i;
    }
}

console.log(teks + " = " + jumlah);