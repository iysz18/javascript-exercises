const repeatString = function(str, count) {
    // my simple solution
    let newStr = "";
    for (let i = 0; i < count; i++) {
        newStr += str;
    }

    return newStr;
    
    // this is another solutio to this exercise
    // let newStr = [];
    // for (let i = 0; i < count; i++) {
    //     newStr.push(str);
    // }

    // return newStr;
};

// Do not edit below this line
module.exports = repeatString;
