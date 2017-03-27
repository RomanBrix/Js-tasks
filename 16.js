/*
Write a JavaScript function to extract unique characters from a string. 
Example string : "thequickbrownfoxjumpsoverthelazydog"
Expected Output : "thequickbrownfxjmpsvlazydg"
*/
function unique(str) {

  str = str.split('').filter( function(value, index, array ) {
    return array.indexOf( value ) === index;
  }).join('');
return str;
}

console.log( unique("thequickbrownfoxjumpsoverthelazydog") );
