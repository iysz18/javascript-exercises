const reverseString = function(word) {
    return word.split('').reverse().join('');

    // this is another solution - a complete waste of time :)
    
    // let reversedStr = '';
    // let wordAsArr = word.split('');
    // for (let i = word.length - 1; i >= 0; i--) {
    //     reversedStr += wordAsArr[i];
    // }

    // return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
