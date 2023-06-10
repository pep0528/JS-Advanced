function lowestPricesInCities (arr) {
    let items = {};
    let result = [];

    for (const line of arr) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);

        if (product in items) {
            if (price < items[product].price) {
                items[product].price = price;
                items[product].town = town;
            }
        } else {
            let obj = {};
            obj.price = price;
            obj.town = town;
            items[product] = obj;
            result.push(product);
        }
    }

    for (let i of result) {
        console.log(`${i} -> ${items[i].price} (${items[i].town})`);
    }
}

lowestPricesInCities(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'])