const sumAll = function(num1,num2) {
    let i = 1;
    let arr = [];
    if (num1 > num2) {
        for(; i < num1; i++) {
            arr[i] = num2++;
        }
    }
    else {
        for (;i < num2; i++) {
            arr[i] = num1++;
        }
    }
    
    let sumOfAllNums = arr.reduce((sum, current) => sum + current, 0);

    return sumOfAllNums;
};

// Do not edit below this line
module.exports = sumAll;
