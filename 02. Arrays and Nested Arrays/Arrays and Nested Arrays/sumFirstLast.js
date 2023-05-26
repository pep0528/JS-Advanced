function sumFirstLast (arr) {
    let first = Number(arr.pop());
    let second = Number(arr.shift());
    return (first + second);
}

sumFirstLast(['20', '30', '40'])