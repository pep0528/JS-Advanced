function magicMatrices (matrix) {
    let rowSum = matrix[0].reduce((acc, curr) => acc + curr, 0);

    for (let row = 0; row < matrix.length; row++) {
        let sumRow = 0;
        let sumCol = 0;

        for (let col = 0; col < matrix.length; col++) {
            sumRow += matrix[col][row];
            sumCol += matrix[row][col];
        }

        if (rowSum !== sumRow || rowSum !== sumCol) {
            return false;
        }
    }
    return true;
}

magicMatrices([
[4, 5, 6],
[6, 5, 4],
[5, 5, 5]
])