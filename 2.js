/*
Write a JavaScript function that checks whether a
passed string is palindrome or not?

A palindrome is word, phrase,
or sequence that reads the same backward as forward, e.g.,
madam or nurses run.
*/


/*
+++++++++++++++++++++++++++++
done without case sensetivity
+++++++++++++++++++++++++++++
*/


function revers(word) {
  var reversArr = word.split('').reverse(),
      wordArray = word.split(''),
      reversArrWithoutSpace = [],
      wordArrayWithoutSpace = [],
      compareWord,compareReversWord;


    for (var i = 0; i < wordArray.length; i++) {
        var bool = (wordArray[i] == " ");
        if (!bool){
          wordArrayWithoutSpace.push(wordArray[i]);
        }
    }


    for (var i = 0; i < reversArr.length; i++) {
        var bool = (reversArr[i] == " ");
        if (!bool){
          reversArrWithoutSpace.push(reversArr[i]);
        }
    }



  compareWord = reversArrWithoutSpace.join('').toLowerCase();
  compareReversWord = wordArrayWithoutSpace.join('').toLowerCase();
  if(compareReversWord == compareWord) return true;
  else return false;

}
console.log(revers("madam"));
console.log(revers("NuRsEs rUn"));
console.log(revers("Fox"));
