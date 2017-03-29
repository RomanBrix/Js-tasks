/**
 * Created by RomanBrix on 3/29/17.
 */
// Write a JavaScript function to retrieve all the values of an object's properties.


function keeeys(obj) {
    var keys = [];
    for (var key in obj) keys.push(obj[key]);
    return keys;
}


function Student(name,secName) {
    this.name = name;
    this.secName = secName;
}
Student.prototype.someNew = true;
var student = new Student("Grisha","Petrovich");
console.log(keeeys(student));