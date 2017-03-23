/*Write a JavaScript program which accept a number as input and insert
dashes (-) between each two even numbers.
 For example if you accept 025468 the output should be 0-254-6-8.
 */

 function split(numb) {
    var arr = String(numb).split(''); // Разбиваем число на цифры и записываем в массив
    var arrAnsw = [];                 // массив в котором будет правильный ответ
    for(var i=0; i<arr.length;i++){   //проходимся по массиву
      if((+arr[i] % 2 === 0) && (+arr[i+1] % 2 === 0)){ //есть два парных числа стоящих рядом?
         arrAnsw.push(arr[i]);
         arrAnsw.push("-");
      }else {
        arrAnsw.push(arr[i]);
      }
    }
    return arrAnsw.join(''); //выводим правильный ответ

 }
 alert(split(1235588429591203));
