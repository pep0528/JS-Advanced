function calorieObject (arr) {
    const result = {};

    for (let i = 0; i < arr.length; i += 2) {
        const product = arr[i];
        result[arr[i]] = Number(arr[i + 1]);
    }

    console.log(result);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])