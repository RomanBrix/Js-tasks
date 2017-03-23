/*
Write a JavaScript program to compute the exponent
of a number.
Note : The exponent of a number says how many
times the base number is used as a factor.
82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.
*/
function pow(a,n) {
     if (n == 0) {
       return  1 //сводим уравнение к простейшему виду
     } else {
       return a * pow(a, n - 1);
     }
   }

   alert( pow(2,3) ); // 8
