function listOfNames (list) {
    let sorted = list.sort((a, b) => a.localeCompare(b));
    sorted.forEach((id, i) => console.log(`${i + 1}.${id}`));
}

listOfNames(["John", "Bob", "Christina", "Ema"])