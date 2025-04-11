const sumAll = function(min, max) {
    if (min < 0 || max < 0 || isNaN(min) || isNaN(max) || !Number.isInteger(min) || !Number.isInteger(max))
        return "ERROR";

    if (min > max) {
        let temp = max;
        max = min;
        min = temp;
    }

    let k = 0;
    for (let i = min; i <= max; i++){
        k += i;
    }
    return k;
};

// Do not edit below this line
module.exports = sumAll;
