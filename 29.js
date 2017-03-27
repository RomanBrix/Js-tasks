//Write a JavaScript function to get the function name
function myNameIsHeisenberg() {
    alert( arguments.callee.name );
}

myNameIsHeisenberg();
