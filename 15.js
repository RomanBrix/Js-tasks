/**
 * Created by RomanBrix on 3/29/17.
 */
//Write a JavaScript function to convert an object into a list of `[key, value]` pairs.
function pairs(obj) {

    var list = [];
    for (var key in obj) {
        list.push([key, obj[key]]);
    }
    return list;


}

console.log(pairs({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"})); 


