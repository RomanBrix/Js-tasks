/*
Write a JavaScript program which accept a string as input
and swap the case of each character.
For example if you input 'The Quick Brown Fox'
the output should be 'tHE qUICK bROWN fOX'.
*/
var swapCase = function(lett){
    var swaped = "";
    for(var i = 0; i<lett.length; i++){
        if(lett[i] === lett[i].toLowerCase()){
            swaped += lett[i].toUpperCase();
        }else {
            swaped += lett[i].toLowerCase();
        }
    }
    return swaped;
}

var testText = 'The Quick Brown Fox';
alert(swapCase(testText));
