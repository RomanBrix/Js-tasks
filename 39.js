//Write a JavaScript function to filter false,
//null, 0 and blank values from an array.

//var1
function removed(arr) {
  arr = arr.filter(fil);
  return arr;
}

function fil(value) {
  if(value !== false && value !== null && value !== 0 && value !== "") {
    return value;
  }
}




// var2 based on task 24.js
/*
function removed(arr){
  var  count = arr.length+1;
  // console.log(count);
  var newArr = [];
      for(var i = 0; i < count; i++) {
      var bool1 = !(arr[i] === undefined),
          bool3 = !(String(typeof arr[i]) === "boolean"),
          bool4 = !(arr[i] === null),
          bool5 = !(arr[i] === 0),
          bool6 = !(arr[i] === "");

            // console.log("elem: "+ i +
            //             " undefined? - "+ bool1 +
            //             " NaN? - " + bool2 +
            //             " false? - " + bool3 +
            //             " null? - " + bool4 +
            //             " 0? -" + bool5
            //           );

            if(bool1 && bool3 && bool4 && bool5 && bool6){
              newArr.push(arr[i]);
            }
      }
      return newArr;
}
*/
console.log(removed([58, '', 'abcd', true, null, false, 0]));
