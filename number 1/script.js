    
    const minute = Math.floor(Math.random() * 60);
    
    
    let quarter;
    if (minute >= 0 && minute <= 15) {
        quarter = 1;
    } else if (minute >= 16 && minute <= 30) {
        quarter = 2;
    } else if (minute >= 31 && minute <= 45) {
        quarter = 3;
    } else {
        quarter = 4;
    }

    console.log(`Число: ${minute}, Четверть: ${quarter}`);



