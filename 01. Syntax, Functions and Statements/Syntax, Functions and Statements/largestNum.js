function largestNumber (x, y, z) {
    let output;

    if (x > y && x > z) {
        output = x;
    } else if (y > x && y > z) {
        output = y;
    } else if (z > x && z > y) {
        output = z;
    }

    console.log(`The largest number is ${output}.`);
}

largestNumber(5, -3, 16)