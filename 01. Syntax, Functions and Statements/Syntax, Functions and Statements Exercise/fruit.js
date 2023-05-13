function fruit (fruit, g, price) {
    let kg = g / 1000;
    let money = (Number(kg) * Number(price)).toFixed(2);
    console.log(`I need $${money} to buy ${kg.toFixed(2)} kilograms ${fruit}.`);
}

fruit('orange', 2500, 1.80)