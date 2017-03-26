/*
Write a JavaScript function to generate an array of specified length,
filled with integer numbers, increase by one from starting position.

Test Data :
console.log(array_range(1, 4));
[1, 2, 3, 4]
console.log(array_range(-6, 4));
[-6, -5, -4, -3]
*/


//based on task 36.js

function increase(numb, leng) {
    var arr = [];
    for (var i = 0; i < leng; i++) {
      arr.push(numb);
      numb +=1;
    }
    return arr;
}
console.log(increase(0,6));
console.log(increase(-6, 4));
