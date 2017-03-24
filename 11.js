//Write a JavaScript program to find the
//sum of squares of a numeric vector.


function sumOfPow(array) {
  var answ = 0;
  for (var i = 0; i < array.length; i++) {

  //answ += array[i] * array[i];
    answ += Math.pow(array[i], 2);

  }
  return answ;
}
var testArr = [0,1,2,3,4]
alert(sumOfPow(testArr)); //30
