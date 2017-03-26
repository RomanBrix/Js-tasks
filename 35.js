//Write a JavaScript function to get a random item from an array.
function randElem(arr) {
  var max = arr.length;
  var min = 0;
  var rand = Math.floor(Math.random() * (min+max));
  console.log(rand);
  return (arr[rand]);
}
console.log(randElem([1,2,3,4,5,6,7,8,9]));
