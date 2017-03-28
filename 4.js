/**
 * Created by RomanBrix on 3/28/17.
 */
/*
 4.Напиши функцию fmap(a, gen), которая принимает на вход 2 функции, a и gen,
 где gen — функция-генератор вроде той, что была в первом задании.
 fmap возвращает новую функцию-генератор, которая при каждом вызове берет
 следующее значение из gen и пропускает его через функцию a. Пример:

 var gen = sequence(1, 1);
 function square( x ) { return x * x; }
 var squareGen = fmap(square, gen);
 console.log(squareGen()); // 1
 console.log(squareGen()); // 4
 console.log(squareGen()); // 9
 console.log(squareGen()); // 16
 */

function fmap(fun,gen) {
   return function () {
    return fun(gen());
   }
}

function square(x) {
    return x*x;
}
function sequence(start, step) {
    start = start || 0;
    step = step || 1;
    var sequence_counter = [];
    return function () {
        if (String(sequence_counter[start]) === "undefined") {
            sequence_counter[start] = start;
        }
        if (sequence_counter[start] >= start) {
            sequence_counter[start] += step;
        }
        return sequence_counter[start] - step;
    }
}
var gen = sequence(1, 1);
var squareGen = fmap(square, gen);
console.log(squareGen()); // 1
console.log(squareGen()); // 4
console.log(squareGen()); // 9
console.log(squareGen()); // 16