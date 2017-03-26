//Write a JavaScript function to create a specified number
//of elements with pre-filled numeric value array

//var1

function specified(leng,numb) {
    var arr = [];
    for (var i = 0; i < leng; i++) {
      arr.push(numb);
    }
    return arr;
}
console.log(specified(6,0));
console.log(specified(4,11));

//var2
/*
function specified(leng,numb) {
        return Array.apply(null, Array(leng)).map(Number.prototype.valueOf,numb);
        //создает массив, заполняет значениями null, переписывает значениями numb;
}
console.log(specified(6,0));
console.log(specified(4,11));
*/
