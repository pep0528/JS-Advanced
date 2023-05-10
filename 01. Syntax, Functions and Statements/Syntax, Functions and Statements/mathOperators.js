function mathOperator (x, y, op) {
    let output;

    switch (op) {
        case '+': output = x + y; break;
        case '-': output = x - y; break;
        case '*': output = x * y; break;
        case '/': output = x / y; break;
        case '%': output = x % y; break;
        case '**': output = x ** y; break;
    }

    console.log(output);
}

mathOperator(5, 6, '+')