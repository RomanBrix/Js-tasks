/*
Write a JavaScript function that generates a
string id (specified length) of random characters. 

Sample character list : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
*/
function rand(elem) {
  var list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(''),
      min = 0;
      max = list.length,
      answ = [];
      for (var i = 0; i < elem; i++) {
          var id = Math.floor(Math.random() * (max - min + 1)) + min;
          answ.push(list[id]);
      }
      return answ.join('');

}
console.log(rand(20));
