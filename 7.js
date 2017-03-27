/*
Write a JavaScript function that accepts a string as a
parameter and counts the number of vowels within the string.
*/
function vowel_count(string) {
  var vowel_list = 'aeiouAEIOU',
      vcount = 0;

  for(var x = 0; x < string.length ; x++) {
    if (vowel_list.indexOf(string[x]) !== -1) {
      vcount += 1;
    }

  }
  return vcount;
}
console.log(vowel_count("The quick brown fox"));
