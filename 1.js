/**
 * Created by RomanBrix on 3/28/17.
 */
/*
 Напиши функцию создания генератора sequence(start, step).
 Она при вызове возвращает другую функцию-генератор, которая при
 каждом вызове дает число на 1 больше, и так до бесконечности.
 Начальное число, с которого начинать отсчет, и шаг, задается при создании
 генератора. Шаг можно не указывать, тогда он будет равен одному.
 Начальное значение по умолчанию равно 0. Генераторов можно создать сколько угодно.
 var generator = sequence(10, 3);
 var generator2 = sequence(7, 1);
 console.log(generator()); // 10
 console.log(generator()); // 13
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
var gen = sequence();
console.log(gen());
console.log(gen());
console.log(gen());