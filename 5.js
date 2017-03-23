/*
Write a simple JavaScript program to join all elements of
the following array into a string.

Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"
*/
function join(arr){
  return arr.join(',') + "\n" + arr.join('+');
}

var myColor = ["Red", "Green", "White", "Black"];
alert(join(myColor));
/*
out will:
"Red,Green,White,Black"
"Red+Green+White+Black"
*/
