function biggerHalf (arr) {
    arr.sort((a, b) => a - b);
    let mid = Math.floor(arr.length / 2);
    let result = arr.slice(mid);
    return result;
}

biggerHalf([4, 7, 2, 5])