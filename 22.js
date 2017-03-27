/*
Write a JavaScript function that accepts two arguments,
a string and a letter and the function will count the number
of occurrences of the specified letter within the string.

Sample arguments : 'w3resource.com', 'o'
Expected output : 2
*/
function count(arr,elem) {
  arr= arr.split('');
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] == elem){
      count++;
    }
  }
  return count;
}
console.log(count('w3resourcerrr.com', 'r'));
