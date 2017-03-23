function summOfArr(n) {
     if (n != 1) {
       return  n + summOfArr(n - 1) //сводим уравнение к простейшему виду
     } else {
       return n;
     }
   }

   alert( summOfArr(6) ); // 21
