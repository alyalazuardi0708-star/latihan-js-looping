for(let i = 1; i <= 5; i++){
    let baris = "";
    for(let j = 1; j <= 5 - i; j++){
        baris += " ";
    }
    for(let j = 1; j <= i; j++){
        baris += "*";
    }

    console.log(baris);
}