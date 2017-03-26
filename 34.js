//Write a JavaScript function to get nth largest element from an unsorted array.
function largest(arr, nth){
var larg= 0;
  for (var i = 0; i < nth; i++) {
    for (var j = 0; j < nth; j++) {
      if (arr[i] > arr[j] && arr[i] > larg) {
        larg = arr[i];
      }
    }
  }
  return larg;
}

console.log([1,2,3,4,5,6]);
