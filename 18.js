let batas = 5;
for(let i = 1; i <= batas; i++){
    let baris = "";
    for(let j = 1; j <= 2; j++){
        baris += j + " x " + i + " = " + (j * i) + "   ";
    }
    console.log(baris);
}