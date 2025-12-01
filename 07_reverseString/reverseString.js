const reverseString = function(string) {
    let tempHold = '';
    let i = 1;
    
    for(str in string) {
        tempHold += string.charAt(string.length-(i++));
    }
    return tempHold;
};

// Do not edit below this line
module.exports = reverseString;
