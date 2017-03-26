//Write a JavaScript function to find an array contains a specific element.
function find(arr,target) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == target) {
        return true
      }
    }
    return false;
}
console.log(find([2, 5, 9, 6],5)); //true
console.log(find([2, 5, 9, 6],8)); // false
