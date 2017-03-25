/*
Write a JavaScript function to get the last element of an array.
Passing a parameter 'n' will return the last 'n' elements of the array.
Test Data :
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
Expected Output :
-2
[9, 0, -2]
[7, 9, 0, -2]
*/

//
//  
//
function last(arr,n) {
        n = n || 1;
        if(n < 0) return last(arr, Math.abs(n));

        var splice = arr.length - n;
        arr.splice(0, splice);
        return arr;
  }


    alert(last([7, 9, 0, -2],-1)); // -2
    alert(last([7, 9, 0, -2],3));  // 9, 0, -2
    alert(last([7, 9, 0, -2],6));  // 7, 9, 0, -2
