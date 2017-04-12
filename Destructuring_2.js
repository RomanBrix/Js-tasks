/*
 It would be nice to be able to call our `lastIndexOf` function without providing the third argument,
 and have it default to starting at the end of the array.
 It would be even nicer if we could express this with an ES6 default argument value. Can we?
 */
function lastIndexOf(arr, elt, start = arr.length) {
    console.log(`arr ${arr}, elt ${elt}, start ${start}`);
    for (let i = start - 1; i >= 0; i--) {
        if (arr[i] === elt) return i;
    }
    return -1
}

console.log(lastIndexOf([1, 2, 1, 2], 2));

