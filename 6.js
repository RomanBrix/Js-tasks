/*
 Write a JavaScript function that accepts a string as a parameter and
 find the longest word within the string.

 Example string : 'Web Development Tutorial'
 Expected Output : 'Development'
 */

function longestWord(string) {
    var arr = string.split(" "),
        longest = "";

    // for (var i = 0; i < arr.length; i++) {
    //   for (var j = 0; j < arr.length; j++) {
    //     if(arr[i].length > arr[j].length && arr[i].length > longest.length){
    //       longest = arr[i];
    //     }
    //   }
    // }


    function fn(a, b) {
        return (a.length < b.length) ?  1 : -1;
    }
    arr.sort(fn);
    return arr[0];
}

console.log(longestWord("Web Development " +
                        "xxxxxxcxnvmafcnxmvadfxncmasfvnxcv " +
                        "fskdbfkjsdhfjsdkfh " +
                        "Tutorial" +
                        " aasdkaskfmalkfnalskjd"));

