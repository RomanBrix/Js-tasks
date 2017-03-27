/*
Write a JavaScript function that accepts a
string as a parameter and converts the first letter of
each word of the string in upper case
*/
function titleCase(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
   }
   return splitStr.join(' ');
}
console.log(titleCase('the quick brown fox'));
