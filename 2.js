/**
 * Created by RomanBrix on 3/28/17.
 */
/*
 Нужна функция take(gen, x) которая вызвает
 функцию gen заданное число ( x ) раз и возвращает массив с результатами вызовов.

 var gen2 = sequence(0, 2);
 console.log(take(gen2, 5)); // [0, 2, 4, 6, 8 ]
 */
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
function take(gen, x) {
    var answ = [];
    for (var i = 0; i < x; i += 1){
        answ.push(gen());
    }
    return answ;
}
var gen = sequence(0,2);

console.log(take(gen, 5)); // [0, 2, 4, 6, 8 ]

