/*
Write a JavaScript function to clone an array.
Test Data :
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));
[1, 2, 4, 0]
[1, 2, [4, 0]]
.slice(0);
*/
  function clone(arr) {
    return arr.slice(0);
  }
alert(clone([1,2,3,4]));
