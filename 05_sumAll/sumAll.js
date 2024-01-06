const sumAll = function(start, end) {
    // if needed swap 'start' with 'end' values if 'start' < 'end'
    if (start > end) [start, end] = [end, start];

    // if value of 'start' || 'end' are negative or non-number like array or string
    let sum = 0;
    if (typeof start === "number" && typeof end === "number") {
        // do the final computation of the sum from 'start' to 'end'
        for (let i = start; i <= end; i++) {
            sum += i;
        }
    }
    else return "ERROR";
    
    return sum;
}

// Do not edit below this line
module.exports = sumAll;
