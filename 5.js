/**
 * Created by RomanBrix on 3/28/17.
 */
/*
 5. Напиши функцию partial(fn, a1, a2, ....), которая позволяет зафиксировать один или несколько аргументов функции. Пример:
 function add(a, b){ return a + b; }

 var add5 = partial(add, 5); // Мы получили функцию с 1 аргументом, которая прибавляет к любому числу 5
 console.log(add5(2)); // 7
 */
var ARG_ARR=[];
function partial(fun) {
    ARG_ARR = arguments;
    return function () {
        var fullAnswer = fun(),

            max = arguments.length;

        for (var i = 0; i < max; i += 1 ){
            fullAnswer += arguments[i];
        }
        return fullAnswer;
    }
}
function add() {
    var count = 0,
        max = ARG_ARR.length;
    for (var i = 1; i < max; i += 1){
        count += ARG_ARR[i];
    }
    return count;

}

var add5 = partial(add, 5,5,5,5);
console.log(add5(2,3,4)); // 29  -  (5+5+5+5 = 20; 2+3+4 = 9; 20+9 = 29)
