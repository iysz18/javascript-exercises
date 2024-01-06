const removeFromArray = function(array, ...otherArgs) {
    let filteredArray = [];

    for (let i = 0; i < array.length; i++) {
        if (!otherArgs.includes(array[i])) filteredArray.push(array[i]);
    }

    return filteredArray;
};  

// Do not edit below this line
module.exports = removeFromArray;
