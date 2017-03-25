/*
Write a JavaScript program to flatten a nested (any depth) array.
If you pass shallow, the array will only be flattened a single level.
Sample Data :
console.log(flatten([1, [2], [3, [[4]]],[5,6]]));
[1, 2, 3, 4, 5, 6]
console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
[1, 2, 3, [[4]], 5, 6]
*/
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

console.log(flatten([1, [2], [3, [[4]]],[5,6]]));

console.log(flatten([1, [2], [3, [[4]]],[5,6]], true));
