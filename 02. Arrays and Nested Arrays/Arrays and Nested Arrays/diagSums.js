function diagonalSums (arr) {
    let firstDia = 0;
    let secondDia = 0;
    let firstIndex = 0;
    let secondIndex = arr[0].length - 1;
    
    arr.forEach(array => {
        firstDia += array[firstIndex++];
        secondDia += array[secondIndex--];
    });

    console.log(firstDia + ' ' + secondDia);
}

diagonalSums([[20, 40], [10, 60]])