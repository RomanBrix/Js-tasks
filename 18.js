/**
 * Created by RomanBrix on 3/29/17.
 */
//Write a JavaScript function to check whether a given value is a DOM element.
function isDom(obj) {
    return !!(obj && obj.nodeType === 1);
}
console.log(isDom(document.getElementById("div")));
