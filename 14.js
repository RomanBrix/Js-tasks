//Write a JavaScript program to remove duplicate
//items from an array (ignore case sensitivity).
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
var testArr = [1, 2, 2, 4,4,4,4,4,,5, 4, 7, 8, 7, 3, 6,,,];
alert(removeDupl(testArr));
