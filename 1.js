/*
Write a JavaScript function to check whether an `input` is an array or not.
Test Data :
console.log(is_array('w3resource')); //false
console.log(is_array([1, 2, 4, 0])); //true
*/
  function isArr(input) {
    return (toString.call(input) ==="[object Array]") ?
        true : false;
}

  var arr = [,,,,];
  alert(isArr([1,2,3])); //true
  alert(isArr(1)); // false
  alert(isArr(arr)); //true
  alert(isArr("asdasd")); // false
