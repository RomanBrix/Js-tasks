/**
 * Created by RomanBrix on 4/18/17.
 */
module.exports = function boomCount(src) {


        var id = src.id.split("_"),
            i_max = parseInt(id[0], 10) +2,
            j_max = parseInt(id[1], 10) +2,
            max_colum = document.getElementById("columns").value,
            max_row = document.getElementById("rows").value,
            counter = 0;



        for (var i = id[0]-1; i < i_max; i += 1) {
            for (var j = id[1]-1; j < j_max; j += 1){
                if(j_max-1 > parseInt(max_colum) ) j_max -= 1;// край справа
                if (i_max - 1 > parseInt(max_row)) i_max -= 1;// край снизу
                if(i === 0) i++;// край сверху
                if(j === 0) j++;// край слева


                var elem = document.getElementById(i + '_' + j);

                if(elem.hasAttribute('boom')){
                    counter += 1;

                }else { }
            }
        }
        if(counter > 0){
            src.innerHTML = counter;
        } else {

        }
}