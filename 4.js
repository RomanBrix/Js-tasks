/*
Write a JavaScript function that returns a passed
string with letters in alphabetical order.
*/


function sort(string){
  var answArr = string.split('').sort().join('');
  return answArr;
}
console.log(sort("webmaster"));
