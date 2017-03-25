/*
Write a JavaScript function to find the difference of two arrays. Go to the editor
Test Data :
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["3", "10", "100"]
console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
["6"]
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
["3", "10", "100"]
*/


/*
Используем на переменных функцию из задания 21.js чтобы получить
одномерный массив и дальше используем функцию сравнения
*/

//тестовые переменные
var test1 = flatten([1, 2, 3, 4, 5]),
    test2 = flatten([1, [2], [3, [[4]]],[5,6],[7,8]]);
    // console.log(test1);
    // console.log(test2);
console.log(difference(test1, test2));


//Функция сравнения
function difference(arr1, arr2) {
var answ =[];
  if (arr1.length == arr2.length || arr1.length > arr2.length) {
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] != arr2[i]) {
        answ.push(arr1[i]);
      }
    }
  }else {

    for (var i = 0; i < arr2.length; i++) {
      if (arr2[i] != arr1[i]) {
        answ.push(arr2[i]);
      }
    }

  }
  return answ;
}


// фнукция с задания 21.js
function flatten(arr, shallow,answ){
  if(!answ) {
    answ = [];
  }  // что бы массив не обнулялся при рекурсии

if (shallow) {
  return answ.concat.apply(answ,arr);
  }

   for(var i = 0; i < arr.length; i++){
        if(arr[i].constructor == Array){
            flatten(arr[i],shallow,answ);
        } else {
            answ.push(arr[i]);
          }
   }

    return answ;
}
