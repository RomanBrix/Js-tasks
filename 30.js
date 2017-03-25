/*
Write a JavaScript function to merge two arrays and removes all duplicates elements.
*/


//Based on task 14.js

function removeDupl(arr,arr2) {
  var prevAnsw=[],
      answ=[],
      obj={};

  for (var i=0; i<arr.length; i++) {
    prevAnsw.push(arr[i])
  }
  for (var i=0; i<arr2.length; i++) {
    prevAnsw.push(arr2[i])
  }
  for (var i=0; i<prevAnsw.length; i++) {
    obj[prevAnsw[i]]=0;
  }
  for (i in obj) {
    answ.push(i);
  }
  return answ;
}
var testArr = [1, 2, 2, 4,4,4,4,4,,5, 4, 7, 8, 7, 3, 6,,,];
var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(removeDupl(array1,array2));
