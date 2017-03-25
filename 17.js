//Write a JavaScript program to shuffle an array.

function shuffle(arr) {
    var a, b, i = arr.length;
    for (i; i; i--) {
        a = Math.floor(Math.random() * i);
        b = arr[i - 1];
        arr[i - 1] = arr[a];
        arr[a] = b;
        console.log(i);
    }
    return arr;
}

var testArr = [1,2,3,4,5,6,7,8,9,0];
alert(shuffle(testArr));
