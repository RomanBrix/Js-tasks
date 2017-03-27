/*
Write a JavaScript function to find the first not repeated character. 

Sample arguments : 'abacddbec'
Expected output : 'e'
*/
function find(str) {
  str = str.split('');
  var result = '';

  for (var i = 0; i < str.length; i++) {
    var  count = 0;

    for (var j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count+= 1;
      }
    }

    if (count < 2) {
      result = str[i];
      break;
    }
  }
  return result;
}
console.log(find('abacddbec'));
