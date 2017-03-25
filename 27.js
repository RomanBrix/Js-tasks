/*
Write a JavaScript function to retrieve the value of a given
property from all elements in an array.

*/

function property_value(arr, prop) {
	var answ = [],
		  index = -1,
		  count = arr.length,
      array_items;
        // console.log(count);
	while (++index < count) {
		array_items = arr[index];
    // console.log(array_items);

    if (array_items.hasOwnProperty(prop)) {
	     answ[answ.length] = array_items[prop];
    }
	}
	return answ;
}

var library = [
   { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
   { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
   { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
   ];

console.log(property_value(library, 'title'));
console.log(property_value(library, 'author'));
