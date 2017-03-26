/*
Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined'
and 'NaN' values from an array.
Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
Expected result : [15, -22, 47]
*/
function removed(arr){
  var  count = arr.length+1;
  // console.log(count);
  var newArr = [];
      for(var i = 0; i < count; i++) {
        var bool1 = !(arr[i] === undefined),
            bool2 = !(String(arr[i]) === "NaN"),
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

            if(bool1 && bool2 && bool3 && bool4 && bool5 && bool6){
              newArr.push(arr[i]);
            }
      }
      return newArr;
}
console.log(removed([NaN, 0, 15, false, -22, '',undefined, 47, null,true]));
