function extractIncreasingSubset (arr) {
    let biggest = Number.MIN_SAFE_INTEGER;
    
    const result = arr.reduce((acc, curr) => {
        if (curr >= biggest) {
            biggest = curr;

            const tempArr = acc;
            tempArr.push(curr);
            return tempArr;
        }
        return acc;
    }, []);
    
    return result;
}

extractIncreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24])