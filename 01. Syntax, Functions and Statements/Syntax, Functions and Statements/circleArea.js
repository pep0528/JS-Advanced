function circleArea (input) {
    let output;
    let type = typeof(input);

    if (type === 'number') {
        output = Math.pow(input, 2) * Math.PI;
        console.log(output.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}

circleArea(5)