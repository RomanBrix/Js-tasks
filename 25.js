/*
Write a JavaScript function that accept a list of country
names as input and returns the longest country name as output.

Sample function :
Longest_Country_Name(["Australia", "Germany", "United States of America"])

Expected output :
"United States of America"
*/
//same as 6.js
function longestCountry(arr) {
  var long = "";
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i].length > arr[j].length && arr[i].length > long.length) {
        long = arr[i];
      }
    }

  }
  return long;
}

console.log(longestCountry(["Australia", "Germany", "United States of America"]));
