/*
Write a JavaScript program to perform a binary search. Go to the editor
Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.
Sample array :
var items = [1, 2, 3, 4, 5, 7, 8, 9];
Expected Output :
console.log(binary_Search(items, 1)); //0
console.log(binary_Search(items, 5)); //4
*/
function binary_Search(arr, val){
    var first  = 0,
        last   = arr.length - 1,
        middle = Math.floor( (last + first) / 2);

    while(arr[middle] != val && first < last) {
       if (val < arr[middle]) {
            last = middle - 1;
        } else if (val > arr[middle]) {
            first = middle + 1;
        }

      middle = Math.floor((last + first)/2);

    }

 return (arr[middle] != val) ? -1 : middle;
}
var testArr = [1, 2, 3, 4, 5, 7, 8, 9];
alert(binary_Search(testArr, 1));
alert(binary_Search(testArr, 5));
