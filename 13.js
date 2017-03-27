//Write a JavaScript function to compute the factors of a positive integer.
function compute(n) {
  var arr = [];
  for(var i = 0; i <= n ; i++) {
    n % i === 0? arr.push(i):arr ;
  }
return arr;
}
console.log(compute(16));
console.log(compute(17));
console.log(compute(18));
console.log(compute(20));
