function previousDay (year, month, day) {
    let prevDay = new Date(year, month, day - 1);
    let newYear = prevDay.getFullYear();
    let newMonth = prevDay.getMonth();
    let newDate = prevDay.getDate();
    console.log(`${newYear}-${newMonth}-${newDate}`);
}

previousDay(2016, 9, 30)