//Write a JavaScript program to check whether a number is even or not.


/*
function even(a) {
  return (Math.abs(a) % 2 == 1) ? false : true;
}

alert(even(423231325421387));//false
*/


function even(a)  {
  if (a === 0) {
    return true;
  }
  if (a === 1) {
    return false;
  } else {
    return even(Math.abs(a-=2));
  }  
}
alert(even(-63437)); //false
