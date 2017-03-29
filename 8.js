/**
 * Created by RomanBrix on 3/29/17.
 */

/*
 Write a JavaScript program to create a Clock.
 Note : The output will come every second.
 Expected Console Output :
 "14:37:42"
 "14:37:43"
 "14:37:44"
 "14:37:45"
 "14:37:46"
 "14:37:47"
 */
function timer() {

    return function() {
        var date = new Date();
        var time = date.getHours() + ':' +
            date.getMinutes() + ':' +
            date.getSeconds();
        return console.log(time);
    };

}
var now = timer();
var startTime = setInterval(now, 1000);

setTimeout(function() {
    clearInterval(startTime);
    alert( 'стоп' );
}, 10000);
parseInt()
