/*
Write a JavaScript program to get the integers
in range (x, y). Go to the editor
Example : range(2, 9)
Expected Output : [3, 4, 5, 6, 7, 8]
*/

//
//Функция с использованием рекурсии
//
function getInt(start, end) {
  if (end - start === 2) {
    return [start + 1];
  } else {
      var answ = getInt(start, end - 1);
      answ.push(end - 1);
      return answ;
    }
}  

alert(getInt(2,9));  //[3, 4, 5, 6, 7, 8]

/*
function getInt(start, end) {
  var answ = [];
  while(a < b){
    ++a;
    answ.push(a);
  }
  answ.pop();
  return answ;
 }
alert(getInt(10,20));
*/
