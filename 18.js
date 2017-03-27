//Write a function for searching JavaScript arrays with a binary search. 
function BinarySearch(arr,elem) {
var i = 0,
    leng = arr.length;

  while (i < leng) {
  var round = Math.floor((i+leng)/2);
    if (elem <= arr[round]){
       leng = round;
    } else { i = round+1; }
  }

if (arr[i] === elem) return i;
else return -1;
}
var testArr = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
console.log(BinarySearch(testArr,6));
