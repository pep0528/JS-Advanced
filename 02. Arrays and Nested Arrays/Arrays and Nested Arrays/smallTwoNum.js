function smallestTwoNumbers (arr) {
    let result = '';
    arr.sort((a, b) => a - b);
    result = arr.shift() + ' ' + arr.shift();
    console.log(result);
}

smallestTwoNumbers([30, 15, 50, 5])