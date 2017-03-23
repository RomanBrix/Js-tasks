/*
Write a JavaScript program to get the first n Fibonacci numbers.
Note : The Fibonacci Sequence is the series of
numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, . . .
Each subsequent number is the sum of the previous two.
*/
function fib(n) {
  var a = 1,
      b = 1,
      answ = [0,a,b];
  for (var i = 3; i <= n; i++) {// i=3 что бы считать первые n без 0 // i=4 что бы считать с 0
    var c = a + b;
    a = b;
    b = c;
    answ.push(b);
  }
  if(n === 0) return answ[0];
  return answ;

}
alert(fib(10));


/*
Для рекурсии fib(n - 1) + fib(n - 2);
function fib(n) {
  if(n <= 1){

    return n;
  }else{
    return fib(n - 1) + fib(n - 2);
  }
}
*/
