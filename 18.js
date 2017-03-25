
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
