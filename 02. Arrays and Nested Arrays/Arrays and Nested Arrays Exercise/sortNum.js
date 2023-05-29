function sortingNumbers (arr) {
    let sorted = arr.sort((a, b) => a - b);
    let result = [];

    while (sorted.length !== 0) {
        let first = sorted.shift();
        let last = sorted.pop();
        result.push(first, last);
    }

    return result;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])