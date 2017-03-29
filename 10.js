/*
 Write a JavaScript program to sort an array of JavaScript objects.

 */
function sorted (library) {
    function sorting(a, b) { return b.libraryID - a.libraryID;}
    return library.sort(sorting);
}
var library = [
    {
        title: 'The Road Ahead',
        author: 'Bill Gates',
        libraryID: 1254
    },
    {
        title: 'Walter Isaacson',
        author: 'Steve Jobs',
        libraryID: 4264
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        libraryID: 3245
    }];
console.table(sorted(library));