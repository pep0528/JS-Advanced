function sameNumbers (input) {
    let num = String(input);
    let sum = 0;
    let isTrue = true;

    for (let i = 0; i < num.length; i++) {
        let currNum = num[i];
        sum += Number(num[i]);

        if (num[0] !== currNum) {
            isTrue = false;
        }
    }

    console.log(isTrue);
    console.log(sum);
}

sameNumbers(2222222)