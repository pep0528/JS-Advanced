function printArrayWithDelimiter (arr, deli) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i]);
    }
    console.log(newArr.join(deli));
}

printArrayWithDelimiter(['One', 'Two', 'Three', 'Four', 'Five'], '-')