/*
Write a JavaScript program to find a pair of elements (indices of the two numbers)
from an given array whose sum equals a specific target number.

Input: numbers= [10,20,10,40,50,60,70], target=50
Output: 3, 4
*/

function summ(arr, target){
  var answ = [];
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if(i == j) j+=1;
      if(arr[i]+arr[j] == target){
        
        // answ.push(arr[i]);
        // answ.push(arr[j]);
        answ.push(i+1);
        answ.push(j+1);
        i = arr.length-1;// stop
      }
    }
  }
  return answ;
}
console.log(summ([5,5,10,20,40,50,60,70],40));// []
console.log(summ([5,5,10,20,40,50,60,70],10));// [1, 2]
console.log(summ([5,5,10,20,40,50,60,70],70));// [3, 7]
console.log(summ([5,5,11,20,40,50,60,70],70));// [4, 6]
