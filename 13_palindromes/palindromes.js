const palindromes = function (word) {
    /* remove special characters, spaces and make lowercase*/
    let removeChar = word.replace(/[^A-Z0-9]/ig, "").toLowerCase();

    /* reverse removeChar for comparison*/
    let  checkPalindrome = removeChar.split('').reverse().join('');

    for(let i = 0; i < word.length; i++) {
        if (removeChar[i] !== checkPalindrome[i]) {
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
