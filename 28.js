//Write a JavaScript program to pass a 'JavaScript function' as parameter. 
function first(name,func) {
  func(name);
}
function sayHello(name) {
  console.log("Hello " + name);
}
first("Vlad",sayHello);// "Hello Vlad"
