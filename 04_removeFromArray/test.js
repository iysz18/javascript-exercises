const removeFromArray = function(arr, ...otherArgs) {
    // arr[1, 2, 3, 4, 5]
    // otherArgs[3, 2]
    let newArr = [];
    let paraArr = Array.from(otherArgs);
    for (let i = 0; i < paraArr.length; i++) { //otherArgs
        for (let j = 0; j < arr.length; j++) { //arr
            if (arr[j] !== paraArr[i]) {
                newArr.push(arr[j]);
            }
        }
    }

    return newArr;
};                        // 0  1
                            [1, 2]
                          // 0  1  2  3  4
console.log(removeFromArray([1, 2, 3, 4, 5], 1, 2));