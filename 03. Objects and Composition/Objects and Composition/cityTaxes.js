function cityRecord (name, population, treasury) {
    let city = {
        name,
        population,
        treasury,
        taxRate: 10,

        collectTaxes() {
            city.treasury += city.population * city.taxRate;
        },

        applyGrowth (percent) {
            city.population += Math.floor(city.population * percent / 100);
        },

        applyRecession (percent) {
            city.treasury -= Math.floor(city.treasury * percent / 100);
        },
    };

    return city;
}
let city = cityRecord('Tortuga', 7000, 15000);
console.log(city);