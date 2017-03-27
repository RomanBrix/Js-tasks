/*
Write a JavaScript function that reverse a number.
Example x = 32243;
Expected Output : 34223
*/


function revers(numbers) {
  var arr = [],
      answ;
  arr = String(numbers).split('').reverse();
  answ = Number(arr.join(''));
  console.log(typeof answ);
  return answ;
}
console.log(revers(32243)); //34223
