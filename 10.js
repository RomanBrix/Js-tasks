/*
Write a JavaScript program which prints the elements of the following array. Go to the editor
Note : Use nested for loops.
Sample array : var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
Sample Output :
"row 0"
" 1"
" 2"
" 1"
" 24"
"row 1"
*/

//Variant 1
function printElem(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log("row: " + i);

    for (var j = 0; j < arr.length-1; j++) {
      console.log("  " + arr[i][j]);
    }
  }
}


//Variant 2
function secondVariant(arr){
    for (var i in arr) {
      console.log("row " + i);
      for (var j in arr[i]) {
        console.log("  " + arr[i][j]);
      }
    }
}
var testArr = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];
printElem(testArr);
//secondVariant(testArr);
