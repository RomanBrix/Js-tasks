//Write a JavaScript function to find longest substring
//in a given a string without repeating characters


function longSub (str) {

  var myStr = "",
      arr = [];

  for (var i = 0; i < str.length; i++) {

    for (var j = i; j < str.length; j++) {

      if (myStr.indexOf(str[j]) === -1) {

        myStr += str[j];

      } else {
        break;
      }
    }
    arr.push(myStr);
    myStr = "";
  }

  var current = arr[0].length,
      my_word = "";

  for (var i = 1; i < arr.length; i++) {
    if (arr[i].length > current) {
      my_word = arr[i];
      current = arr[i].length;
    }
  }
    return my_word;
}

console.log(longSub("google.com"));
console.log(longSub("example.com"));
