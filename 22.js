/*
Write a JavaScript program to compute the union of two arrays. 
Sample Data :
console.log(union([1, 2, 3], [100, 2, 1, 10]));
[1, 2, 3, 10, 100]
*/
function union(arr1, arr2) {
  var answ = [];

  if ((arr1 == null) || (arr2==null)) {
    return [];
  }


  var obj = {};

  for (var i = arr1.length-1; i >= 0; -- i) {
     obj[arr1[i]] = arr1[i];

    // console.log("arr1: " + obj[arr1[i]]);
  }

  for ( i = arr2.length-1; i >= 0; -- i) {
     obj[arr2[i]] = arr2[i];

    //  console.log("arr2: " + obj[arr2[i]]);
  }


  for (var n in obj) {
  //  console.log(obj[n]);

    answ.push(obj[n])
  }

  return answ;
}
console.log(union([1, 2, 3,5,6,300,500], [100, 2, 1, 10,1,1]));
