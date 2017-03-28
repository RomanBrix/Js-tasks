/**
 * Created by RomanBrix on 3/28/17.
 */
/*
 Write a JavaScript program to display the reading status
 (i.e. display book name, author name and reading status) of the following books
 */
// variant 1;
function disp(arr) {
    for(var i = 0; i < arr.length; i++){
        var answ = [];
        for( key in arr[i]){
            // console.log(arr[i][key]);
            answ.push(arr[i][key]);
        }
        if(answ[2] == true){
            answ.pop();
            console.log("Readed, " + answ.join(', '));
        } else {
            answ.pop();
            console.log("not readed, " + answ.join(', '));
        }
    }
}

//variant 2
/*
function disp(libr) {
    for (var i = 0; i < library.length; i++) {
     var book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
         if (library[i].readingStatus) {
            console.log("Already read " + book);
         } else {
            console.log("You still need to read " + book);
         }
    }
 }
 */
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];
disp(library);