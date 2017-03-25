/*
There are two arrays with individual values, write a JavaScript program
to compute the sum of each individual index value from the given arrays.
Sample array :
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output :
[4, 5, 8, 10, 12, 13] 
*/


/*
первый вариант (не закомментированный) придумал сам, второй - по примеру с задания;
первый вариант лучше тем, что при любом кол-ве элементов в массиве
выдает правильный ответ, если считать что "undefined" == 0;
с таким самым количеством пустых элементов массива как в первом варианте -
второй повставляет "NaN"(в результате undefined + undefined), что мне не понравилось;
*/
function summ(arr1, arr2) {
  var  count1 = arr1.length+1;
  var  count2 = arr2.length+1;
  var newArr = [];

//Начало проверки и замены "undefined" = 0
  if(count1 == count2 || count1 > count2){
      for(var i = 0; i < count1; i++) {
        if( String(arr2[i]) === "undefined") {
             arr2[i] = 0;
        }
        if( String(arr1[i]) === "undefined") {
             arr1[i] = 0;
        }
      }
  } else {
      for( i = 0; i < count2; i++) {
          if( String(arr1[i]) === "undefined") {
             arr1[i] = 0;
         }
        if( String(arr2[i]) === "undefined") {
             arr2[i] = 0;
         }
      }
    }
// конец проверки и замены "undefined" = 0

//начало суммирования элементов
  if (arr1.length > arr2.length || arr1.length == arr2.length) {
    for (i = 0; i < arr1.length; i++) {
      newArr.push((arr1[i] + arr2[i]));
    }
  } else {
      for ( i = 0; i < arr2.length; i++) {
        newArr.push((arr1[i] + arr2[i]));
      }
    }
//конец суммирования
  return newArr;
}
var testArr1 = [,1,2,3,4,0,,6,,,],
    testArr2 = [4,3,2,1,5,,,,,,6,,];
alert(summ(testArr1,testArr2));



//Вариант 2
/*
function summ(arr1, arr2) {
  var newArr = [];
  var count = 0;
  var x=0;

  if (arr1.length === 0 || arr2.length === 0) {
   return "empty";
  }


 while (count < arr1.length && count < arr2.length) {
    newArr.push(arr1[count] + arr2[count]);
    count++;
 }

  if (count === arr1.length) {
      for (x = count; x < arr2.length; x++) {
        newArr.push(arr2[x]);
      }
  } else {
      for (x = count; x < arr1.length; x++) {
          newArr.push(arr1[x]);
      }
    }

  return newArr;
}
var testArr1 = [1,0,2,3,4],
    testArr2 = [3,5,6,7,8,13];
alert(summ(testArr1, testArr2));

*/
