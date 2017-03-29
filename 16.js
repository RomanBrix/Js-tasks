/**
 * Created by RomanBrix on 3/29/17.
 */
// Write a JavaScript function to get a copy of the object where the
// keys have become the values and the values the keys
function invert(obj) {
    answ = {};
    for (key in obj){
        answ[obj[key]] = key;
    }
    return answ;

}
console.log(invert({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));

