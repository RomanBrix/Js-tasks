/**
 * Created by RomanBrix on 3/28/17.
 */
/*
 Write a JavaScript program to get the length of an JavaScript object. Go to the editor
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
function size(obj) {
    var count = 0;
    for (key in obj){
        count +=1;
    }
    return count;
}
console.log(size(student));