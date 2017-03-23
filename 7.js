/*
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/

function compare(a, b) {
  if (a > b) return 1;
  if (a < b) return -1;
}

var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

alert(arr1.sort(compare);); // -4,-3,1,2,3,5,6,7,8
