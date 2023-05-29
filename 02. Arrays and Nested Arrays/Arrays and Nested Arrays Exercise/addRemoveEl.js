function addAndRemoveElements (arr) {
    let n = 1;
    let newArr = [];

    arr.forEach((command) => {
        if (command === 'add') {
            newArr.push(n);
        } else {
            newArr.pop();
        }
        n += 1;
    })

    if (newArr.length >= 1) {
        console.log(newArr.join('\n'));
    } else {
        console.log('Empty');
    }
}

addAndRemoveElements(['remove', 'remove', 'remove'])