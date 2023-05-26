function biggestElement (arr) {
    let result = [];
    arr.forEach(printRow);
    let highest = Math.max(...result);
    console.log(highest);

    function printRow (row) {
        row.forEach(printNumber);
    }

    function printNumber (num) {
        result.push(num)
    }
}

biggestElement([[3, 5, 7, 12], [-1, 4, 33, 2], [8, 3, 0, 4]])