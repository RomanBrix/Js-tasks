//Write a JavaScript program to find duplicate values in a JavaScript array
//same to 14.js ???

function removeDupl(arr) {
  var answ=[],
      obj={};

  for (var i=0; i<arr.length; i++) {
    obj[arr[i]]=0;
  }
  for (i in obj) {
    answ.push(i);
  }
  return answ;
}
var testArr = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];
alert(removeDupl(testArr));
