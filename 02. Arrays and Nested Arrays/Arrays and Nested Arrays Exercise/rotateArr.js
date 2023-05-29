function rotateArray (arr, n) {
    const newArr = [...arr];

    for (let i = 0; i < n; i++) {
        const last = newArr.pop();
        newArr.unshift(last);
    }

    console.log(newArr.join(' '));
}

rotateArray(['1', '2', '3', '4'], 2)