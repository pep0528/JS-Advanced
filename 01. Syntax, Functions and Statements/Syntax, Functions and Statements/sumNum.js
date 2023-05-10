function sumOfNumbers (x, y) {
    let n = Number(x);
    let m = Number(y);
    let output = 0;

    for (let i = n; i <= m; i++) {
        output += i;
    }

    console.log(output);
}

sumOfNumbers('1', '5')