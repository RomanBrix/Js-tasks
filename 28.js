//Write a JavaScript function to find the longest common
//starting substring in a set of strings.

function substr(arr1){
  
  var arr= arr1.concat().sort(), //делаем сортировку массива по алфавиту и записываем в пустой масив
      a1= arr[0],                //первый элемент массива
      a2= arr[arr.length-1],     //последний элемент
      count= a1.length,
      i= 0;

  while(i<count && a1.charAt(i) === a2.charAt(i)) {
      i++;
  }

  return a1.substring(0, i);
}
console.log(substr(["asdasd","asdasadfxvsd"]));
