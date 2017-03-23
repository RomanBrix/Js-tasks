/*
Write a JavaScript program to compute the
sum of an array of integers.
Example : var array = [1, 2, 3, 4, 5, 6]
Expected Output : 21
*/
function summOfArr(n) {
     if (n != 1) {
       return  n + summOfArr(n - 1) //сводим уравнение к простейшему виду
     } else {
       return n;
     }
   }

   alert( summOfArr(6) ); // 21
