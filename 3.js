/*
Write a JavaScript function to get the first element of an array.
Passing a parameter 'n' will return the first 'n' elements of the array.
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]
*/
function first(arr,n) {
        n = n || 1;
        if(n < 0) return arr.slice(0, 0);
        return arr.slice(0, n);
  }


alert(first([7, 9, 0, -2]));   // 7
alert(first([],3));            // []
alert(first([7, 9, 0, -2],3)); // [7, 9, 0]
alert(first([7, 9, 0, -2],6)); // [7, 9, 0, -2]
alert(first([7, 9, 0, -2],-3));// []

/*В АЛЕРТЕ НЕ ВЫВОДЯТСЯ "[]", но в консоле их можно увидить
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
*/
