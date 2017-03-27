//Write a JavaScript function that 
//returns the longest palindrome in a given string.

function isPalindrome(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

function longestPalindrome(str) {
    var longer = '';
    var tmpStr = '';
    var arr = [];
    for (var i = 0; i < str.length; i++) {
        for (var j = 0; j < str.length; j++) {
            tmpStr = str.slice(i, j+1);
            if (isPalindrome(tmpStr)) {
                if ((tmpStr.length > longer.length)) {
                    longer = tmpStr;
                    arr.length = 0;
                    arr.push(tmpStr);
                } else if ((tmpStr.length === longer.length)) {
                    arr.push(tmpStr);
                }
            }
        }
    }
    return arr;
}

console.log(longestPalindrome('abracadabra')); // "aca" "ada"
console.log(longestPalindrome('bananas')); // "anana"
