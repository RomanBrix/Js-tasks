//Write a JavaScript function which accepts an argument and returns the type

//variant1
function type(val) {
    return Object.prototype.toString.call(val);
}

// OR
/*

function type(val) {
    return Object.prototype.toString.call(val);
}

*/

// OR
/*

function type(val) {
    return typeof val;
}

*/
console.log(type(45);
console.log(type('w3resource'));
console.log(type(false));
console.log(type([,,,,]));
