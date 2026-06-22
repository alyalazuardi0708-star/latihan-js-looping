for(let i = 0; i < 5; i++){
    let baris = "";
    for(let j = 0; j < 5; j++){
        baris += String.fromCharCode(97 + i) + " ";
    }
    console.log(baris);
}