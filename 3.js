/**
 * Created by RomanBrix on 3/28/17.
 */
/*
 3.Напиши функцию map(fn, array), которая принимает на вход функцию и
 массив, и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. Пример:
 function square ( x )
 { return x * x; } // возведение в квадрат
 console.log(map(square, [1, 2, 3, 4])); // [1, 4, 9, 16]
 console.log(map(square, [])); // []
 */

function map(fun,arr) {
    var answ = fun(arr);
    return answ;
}

function square(x) {
    var answ = [];
    for (var i = 0; i < x.length; i++){
        var s = x[i]*x[i];
        answ.push(s);
    }
    return answ
}

function onlyPlus(x) {
    var answ = [];
    for (var i = 0; i < x.length; i++){
        var s = Math.abs(x[i]);
        answ.push(s);
    }
    return answ
}

function sqrt(x) {
    var answ = [];
    for (var i = 0; i < x.length; i++){
        var s = Math.sqrt(x[i]);
        answ.push(s);
    }
    return answ
}


console.log(map(square,[1,2,3,4]));
console.log(map(onlyPlus,[-1,-2,3,-4]));
console.log(map(sqrt,[1,144,256,16]));