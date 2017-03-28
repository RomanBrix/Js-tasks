/**
 * Created by RomanBrix on 3/28/17.
 */
/*
 Write a JavaScript program to list the properties of a JavaScript object.
 Sample object :
 var student = {
 name : "David Rayy",
 sclass : "VI",
 rollno : 12 };
 Sample Output : name,sclass,rollno
 */
var student = {
    name : "David Rayy",
    sclass : "VI",
    rollno : 12 };
function lookProp(obj) {

    var keys = [],
        props = [];
    for (var a in obj){
        keys.push(a);
        props.push(obj[a]);
    }
    console.log( keys );
    console.log( props );


}

lookProp(student);