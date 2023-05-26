function pieceOfPie (flavors, t1, t2) {
    let start = flavors.indexOf(t1);
    let end = flavors.indexOf(t2) + 1;
    let result = flavors.slice(start, end);
    return result;
}

pieceOfPie(['Pumpkin Pie', 'Key Lime Pie', 'Cherry Pie', 'Lemon Meringue Pie', 'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie')