/*
 Write a JavaScript function that accepts a number as
 a parameter and check the number is prime or not
 */
function isPrime(numb) {
  if (numb===1){
    return false;
  } else if(numb === 2) {
    return true;
  } else {
       for (var div = 2; div < numb; div++) {
         if(numb % div === 0){
           return false;
         }
       }
       return true;

    }
}
console.log(isPrime(37));
