/*
Write a JavaScript function that generates all combinations of a string.
Example string : 'dog'
Expected Output : d,o,do,g,dg,og,dog
*/

function substr(sting) {
  var array1 = sting.split(''),
      answArr = [],
      answStr,
      temp= "",
      slent = Math.pow(2, array1.length);

// console.log(array1);

  for (var i = 0; i < slent ; i++) {
      temp= "";
      for (var j=0;j<array1.length;j++) {
          if ((i & Math.pow(2,j))){
              temp += array1[j];
          }
      }
      if (temp !== "") {
          answArr.push(temp);
      }
  }
  answStr = answArr.join("; ")
  return answStr;
}

console.log(substr("dog"));
