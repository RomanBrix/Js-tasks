/**
 * Created by RomanBrix on 3/29/17.
 */
/*
 Write a JavaScript function to print all the methods in an JavaScript object.
 Test Data :
 console.log(all_properties(Array));
 ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]
 */
console.log(Object.getOwnPropertyNames(Math));
