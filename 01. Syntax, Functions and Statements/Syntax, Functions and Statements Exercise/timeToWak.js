function timeToWalk (steps, footprint, v) {
    let s = (steps * footprint) / 1000;
    let t = s / v;
    let h = Math.floor(t);
    
    if (h <= 9) {
        h = '0' + h;
    }

    let min = Math.floor(t * 60);
    let rest = 0;

    if (s / 0.5 > 0) {
        rest = Math.floor(s / 0.5);
        min += rest;
    }

    if (min <= 9) {
        min = '0' + min;
    }

    let sec = (((t * 60) % 1) * 60).toFixed(0);
    console.log(`${h}:${min}:${sec}`);
}

timeToWalk(2564, 0.70, 5.5)