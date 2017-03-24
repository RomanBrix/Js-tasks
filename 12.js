//Write a JavaScript program to compute the sum
//and product of an array of integers.
function compute(arr){
  var s = 0,
      p = 1;
  for (i = 0; i < arr.length; i++) {
      s += arr[i];
      p *= arr[i];
  }
  return ('Summ : '+ s + '\nProduct : ' + p);
}

var testArr = [1, 2, 3, 4, 5, 6];
alert(compute(testArr));
