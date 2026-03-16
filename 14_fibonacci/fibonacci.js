const fibonacci = function(num) {
    let toNum = parseInt(num);
    if (toNum < 0) {return "OOPS"}
    if (toNum < 2) {return toNum};

    let n1 = 0, n2 = 1, nextTerm;

    for ( let i = 1; i < toNum; i++) {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return nextTerm;

    //Instead of for loop can use recursive calls
    /*     
    return fibonacci(toNum - 1) + fibonacci(toNum- 2);
    */
};

// Do not edit below this line
module.exports = fibonacci;
