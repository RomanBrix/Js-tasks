/*
Write a JavaScript function to apply Bubble Sort algorithm.
*/
function sortBubble(arr) {
    var tmp, // в роле обменника (независимого лица )
        leng = arr.length - 1;
    for (var i = leng i > 0; i--) {

        var counter=0;

        for (var j = 0; j < i; j++) {
            if (arr[j] > arr[j+1]) {
                tmp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = tmp;
                counter++;
            }
        }
        if(counter===0){
          break;
        }
    }
  return arr;
 }
console.log(sortBubble([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))
