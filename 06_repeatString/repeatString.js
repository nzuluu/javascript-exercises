const repeatString = function(string, num) {
    let finalString = '';
    if (num > 0) {
        while(num > 0) {
            finalString += string;
            num--;
        }
    }
    else if (num == 0) {
        return finalStrin = '';
    }
    else {
        return finalString = 'ERROR';
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
