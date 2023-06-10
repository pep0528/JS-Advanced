function townsToJSON (arr) {
    let result = [];

    for (let town of arr.slice(1)) {
        let [empt, name, lat, lng] = town.split(/\s*\|\s*/);
        lat = Number(lat).toFixed(2);
        lng = Number(lng).toFixed(2);

        let obj = {
            Town: name,
            Latitude: Number(lat),
            Longitude: Number(lng)
        };
        result.push(obj);
    }
    console.log(JSON.stringify(result));
}

townsToJSON(['| Town | Latitude | Longitude |', 
'| Sofia | 42.696552 | 23.32601 |', 
'| Beijing | 39.913818 | 116.363625 |'])