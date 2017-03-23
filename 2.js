/*Write a JavaScript program to find the greatest
common divisor (gcd) of two positive numbers.*/


function gcd(a, n) {
    if ( ! n) {
        return a;
    } else {
      return gcd(n, a % n);
    }


};
alert(gcd(7, 5));
