/*
Write a JavaScript function which will take an array of numbers stored and
find the second lowest and second greatest numbers, respectively.
Sample array : [1,2,3,4,5]
Expected Output : 2,4
*/
function second(arr) {
  function srt(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
  }
  arr.sort(srt);
  var answ = [];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i-1] != arr[i]) {
      answ.push(arr[i]);
      i = arr.length;
    }
  }
  var k = arr.length - 2;
  for (var i = k; i > 0; i--) {
    if (arr[i+1] != arr[i]) {
      answ.push(arr[i]);
      i = 0;
    }
  }
  return answ;
}
console.log(second([1,2,3,4,5,6]));
console.log(second([1,1,1,1,1,2,3,4,5,6,7,2,3,4,5,2,1,4,5,8,9,19,19,19,19]));
