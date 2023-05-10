function stringLength (one, two, three) {
    let first = one.length;
    let second = two.length;
    let third = three.length;

    let sum = first + second + third;
    let avg = Math.floor(sum / 3);

    console.log(sum);
    console.log(avg);
}

stringLength('chocolate', 'ice cream', 'cake')