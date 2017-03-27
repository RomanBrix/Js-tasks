//Write a JavaScript function to  get the number
//of occurrences of each letter in specified string.

//++++++++++++++++++++++++++++++++
// done without case sensetivity;+
//++++++++++++++++++++++++++++++++
function counts(str) {
  var count = {};
    str.toLowerCase().replace(/\S/g, function(i){
      count[i] = (isNaN(count[i]) ? 1 : count[i] + 1);
    });
return count;
}
console.log(counts("The quick brown fox jumps over the lazy dog"));
