function printEveryNthElement (arr, N) {
    let newArr = [];

    for (let i = 0; i < arr.length; i += N) {
        newArr.push(arr[i]);
    }
    return newArr;
}

printEveryNthElement(['5', '20', '31', '4', '20'], 2)