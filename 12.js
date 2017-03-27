//Write a JavaScript function which says whether a number is perfect. 
function isPerfect(numb) {
  var summ = 0;
  for(var i = 0; i <= numb ; i++) {
      numb % i === 0? summ +=i : " ";
  }
  if (summ !== 0 && summ/2 === numb ) {
    return true;
  } else return false;
}
console.log(isPerfect(28));
