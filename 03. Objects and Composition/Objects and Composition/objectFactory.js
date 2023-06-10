function objectFactory (library, orders) {
    let results = [];

    for (const order of orders) {
        let template = order.template;
        let obj = Object.assign({}, template);
        let parts = order.parts;

        for (const method of parts) {
            obj[method] = library[method];
        }

        results.push(obj);
    }

    return results;
}

const library = {
    print: function () {
    console.log(`${this.name} is printing a page`);
    },
    scan: function () {
    console.log(`${this.name} is scanning a document`);
    },
    play: function (artist, track) {
    console.log(`${this.name} is playing '${track}' by ${artist}`);
    },
};

const orders = [
    {
    template: { name: 'ACME Printer'},
    parts: ['print'] 
    },
    {
    template: { name: 'Initech Scanner'},
    parts: ['scan'] 
    },
    {
    template: { name: 'ComTron Copier'},
    parts: ['scan', 'print'] 
    },
    {
    template: { name: 'BoomBox Stereo'},
    parts: ['play'] 
    }
];
const products = factory(library, orders);
console.log(products);