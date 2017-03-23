/*
Write a merge sort program in JavaScript. Go to the editor
Sample array : [34,7,23,32,5,62]
Sample output : [5, 7, 23, 32, 34, 62]
*/
Array.prototype.merge_Sort = function () {
  if (this.length <= 1)
  {
    return this;
  }

  var half = +(this.length / 2);
  var left = this.slice(0, half).merge_Sort();
  var right = this.slice(half,     this.length).merge_Sort();
  var merge = function (left, right)
  {
  var arry = [];
  while (left.length > 0 && right.length > 0)
  {
    arry.push((left[0] <= right[0]) ? left.shift() : right.shift());
  }
    return arry.concat(left).concat(right);
  };

  return merge(left, right);
};

var a = [34,7,23,32,5,62,8];
alert(a.merge_Sort());

/* Возникли затруднения с заданием,
не знал как делать, потому хорошо
разобрал подсказку к заданию
*/
