function squareOfStars (input) {
    let n = Number(input);

    for (let row = 0; row < n; row++) {
        if (row === 0 || row === n - 1) {
            console.log('* '.repeat(n));
            continue;
        }
        console.log(`*${' '.repeat(n - 2)}*`);
    }
}

squareOfStars(1)