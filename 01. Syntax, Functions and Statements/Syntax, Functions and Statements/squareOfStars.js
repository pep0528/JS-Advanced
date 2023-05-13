function squareOfStars (input) {
    let n = Number(input);

    if (n === null || n === "" || n === 0) {
        for (let i = 0; i < 5; i++) {
            console.log('* '.repeat(5).trim());
        }
    } else {
        for (let i = 0; i < n; i++) {
            console.log('* '.repeat(n).trim());
        }
    }
}

squareOfStars(5)