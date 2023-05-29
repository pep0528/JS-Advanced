function sortArrayByTwoCriteria (arr) {
    let sorted = arr.sort((a, b) => {
        firstCrit = a.length - b.length;
        secondCrit = a.localeCompare(b);
        return firstCrit || secondCrit;
    })

    console.log(sorted.join('\n'));
}

sortArrayByTwoCriteria(['alpha', 'beta', 'gamma'])