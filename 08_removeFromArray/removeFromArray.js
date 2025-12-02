const removeFromArray = function(arr, ...removeNum) {
    return arr.filter(item => !removeNum.includes(item))
};



// Do not edit below this line
module.exports = removeFromArray;
