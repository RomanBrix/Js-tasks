/*
Write a JavaScript program to get the integers
in range (x, y). Go to the editor
Example : range(2, 9)
Expected Output : [3, 4, 5, 6, 7, 8]
*/
function getInt(a, b) {
  var answ = [];
  while(a < b){
    ++a;
    answ.push(a);
  }
  answ.pop();

  return answ;

};


alert(getInt(10,20));
