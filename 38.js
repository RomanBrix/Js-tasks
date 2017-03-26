//Write a JavaScript function to move an array
//element from one position to another.

function move(arr,start,pos) {
  var newArr=[],
      elem;
  while (start < 0) {
        start += arr.length;
    }
    while (pos < 0) {
        pos += arr.length;
    }
    while (start > arr.length){
    start -= arr.length;
    }
    while (pos > arr.length){
    pos -= arr.length;
    }
     arr.splice(start, 0, arr.splice(pos, 1)[0]);

  return arr;
}
console.log(move([10, 20, 30, 40, 50], 0, -6));
