//Write a JavaScript function that returns array elements larger than a number
function bigger(arr, val ) {
    arr = arr.filter(function( el ) {

        return el >= val;

    });

    return arr.length !== 0 ? arr : [];
}
var arr = [123,4,23,5,667,6,45,23,123,7,77,8,9,99];
console.log(bigger(arr, 55));
