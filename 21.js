/*
Write a JavaScript function to get all possible subset
with a fixed length (for example 2) combinations in an array.
*/
function subset(arr, size)
 {
    var result_set = [],
        result,
        leng = Math.pow(2, arr.length);


for(var x = 0; x < leng; x++) {
    result = [];
    arrLeng = arr.length - 1;
     do {
        if( (x & (1 << arrLeng)) !== 0) {
               result.push(arr[arrLeng]);
        }
      }  while(arrLeng--);

     if( result.length >= size) {
          result_set.push(result);
     }
}
  return result_set;

}

console.log(subset([1, 2, 3], 2));
