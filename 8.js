/*
Write a JavaScript program to find
the most frequent item of an array
Считаем 1 раз повторяющиеся элементы и сравниваем их со следующим счетчиком (я плохо обьясняю)
*/
 function max(arr) {

   var lastCount=0,
       freqItem;

   for (var i = 0; i < arr.length; i++) {
      var curCount=0;

     for (var j = 0; j < arr.length; j++) {
        if (arr[i]===arr[j]) {
          curCount++;
        }
      }

       if(curCount > lastCount) {
          lastCount = curCount;
          freqItem = arr[i];
        }
     }

     return (freqItem +" (used: " + lastCount + " times)");

   }

   var testArr = [1,5,2,5,2,5,3,5,2,4,5,5,6],
        testArr2 = ["a","a","c","b","c","a","b","c","b","c","b","b","b","a","c","a","b","b"];
      alert(max(testArr2));
