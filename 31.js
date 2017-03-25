/*
Write a JavaScript function to remove a specific element from an array.

Test data :
console.log(remove_array_element([2, 5, 9, 6], 5));
[2, 9, 6]
*/
function rem(arr,target) {
  var answ = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] != target) {
        answ.push(arr[i]);
      }
    }
    return answ;
}
console.log(rem([1,2,3,4,5,6],3));
console.log(rem(['a','b','c','d','f','e'],'c'));

console.log(rem(['a',2,'c',4,'f',6],'c'));
console.log(rem(['a',2,'c',4,'f',6],4));
