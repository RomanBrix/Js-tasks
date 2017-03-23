/*
Write a JavaScript program for binary search.
Sample array : [0,1,2,3,4,5,6]
console.log(l.br_search(5)) will return '5'
*/
Array.prototype.br_search = function (target)
{
  var half = +(this.length / 2);
  if (target === this[half])
  {
    return half;
  }
  if (target > this[half])
  {
    return half + this.slice(half,this.length).br_search(target);
  }
  else
  {
    return this.slice(0, half).br_search(target);
  }
};

testArr= [0,2,7,6,9,3,1];

console.log(testArr.br_search(7));
/* Возникли затруднения с заданием,
не знал как делать, потому хорошо
разобрал подсказку к заданию
*/
