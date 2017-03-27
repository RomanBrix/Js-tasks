//Write a JavaScript function to compute the value of bn where n is the exponent
//and b is the bases. Accept b and n from the user and display the result.


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// автоматический вызов функции сразу после ее обьявления +
// (прочитал об этом сегодня в книге)                     +
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

(function(){
  a = prompt("the bases is",2);
  b = prompt("the exponent is",3);
  return Math.pow(a,b);
  // console.log(a,b);
})()



// OR


(function() {
  a = prompt("the bases is",2);
  b = prompt("the exponent is",3);
  var ans = 1;
    for (var i =1; i <= b; i++) {
                ans *= a;
    }
    alert(ans);
})()
