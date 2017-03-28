/**
 * Created by RomanBrix on 3/28/17.
 */
/*
 Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property. Go to the editor
 Sample object :
 var student = {
 name : "David Rayy",
 sclass : "VI",
 rollno : 12 };
 */
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
function deleteRollno(obj) {
    delete obj.rollno;

    return obj;

}
console.log(student);
console.log(deleteRollno(student));
