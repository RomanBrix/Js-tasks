/**
 * Created by RomanBrix on 3/29/17.
 */
/*
 Write a JavaScript program which returns a subset of a string.
 Sample Data : dog
 Expected Output : ["d", "do", "dog", "o", "og", "g"]
 */
function Sub_Str(string) {
    this.string = string;
    this.subStr = function () {
        var subset = [];
        for (var i = 0; i < string.length; i++)
        {
            for (var j = i+1; j < string.length+1; j++)
            {
                subset.push(string.slice(i,j));
            }
        }
        return subset;
    };
}
var sortString = new Sub_Str( 'dog');


console.log(sortString.subStr());