/**
 * Created by RomanBrix on 3/29/17.
 */
//Write a JavaScript function to check if an object contains given property.


function isProp(obj, key) {
    var arr = Object.getOwnPropertyNames(obj);
    console.log(arr);
    for (var i = 0; i < arr.length; i++){
        if(String(arr[i]) == key) return true;

    }
    return false;
}

console.log(isProp({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}, "green"));


