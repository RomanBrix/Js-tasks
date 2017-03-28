/**
 * Created by RomanBrix on 3/28/17.
 */
/*
 4.1 А, еще, сделай тогда, чтобы в качестве gen можно было указать
 функцию с аргументами, и при вызове
 function add(a, b)
 { return a + b; }
 // Мы получаем новую функцию, которая вызвает add, и результат
    пропускает через функцию square

 var squareAdd = fmap(square, add);
 console.log(squareAdd(2, 3)); // 25 = (2 + 3) ^ 2
 console.log(squareAdd(5, 7)); // 144 = (5 + 7) ^ 2
 */

function fmap(fun,gen) {
    return function (num1,num2) {
        return fun(gen(num1,num2));
    }
}
function add(a, b)
{ return a + b; }
function square(x) {
    return x*x;
}

var squareAdd = fmap(square, add);
console.log(squareAdd(2, 3)); // 25 = (2 + 3) ^ 2
console.log(squareAdd(5, 7)); // 144 = (5 + 7) ^ 2