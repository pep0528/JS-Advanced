function roadRadar (speed, area) {
    let limit = 0;

    switch (area) {
        case 'motorway':
            limit = 130;
            radar(limit, speed);
            break;
        case 'interstate':
            limit = 90;
            radar(limit, speed);
            break;
        case 'city':
            limit = 50;
            radar(limit, speed);
            break;
        case 'residential':
            limit = 20;
            radar(limit, speed);
            break;
    }

    function radar (limit, speed) {
        if (speed <= limit) {
            console.log(`Driving ${speed} km/h in a ${limit} zone`);
        } else {
            let status = '';
            let diff = speed - limit;

            if (diff <= 20) {
                status = 'speeding';
            } else if (diff <= 40) {
                status = 'excessive speeding';
            } else {
                status = 'reckless driving';
            }
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${limit} - ${status}`);
        }
    }
}

roadRadar(200, 'motorway')