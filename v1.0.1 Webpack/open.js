/**
 * Created by RomanBrix on 4/18/17.
 */
let boomCount = require('./boomCounter.js');
var openMoreElements = [],
    START_LOOP = -1;
module.exports = function open(src) {




        var id = src.id.split("_"),
            i_max = parseInt(id[0], 10) +2,
            j_max = parseInt(id[1], 10) +2,
            max_colum = document.getElementById("columns").value,
            max_row = document.getElementById("rows").value;

        boomCount(src);
        var args = arguments;
        args[1] = args[1] || src;

        if(src.textContent === "" && args[1].textContent ==="") {


            for (var i = id[0] - 1; i < i_max; i += 1) {
                for (var j = id[1] - 1; j < j_max; j += 1) {
                    if (j_max - 1 > parseInt(max_colum)) j_max -= 1;// край справа
                    if (i_max - 1 > parseInt(max_row)) i_max -= 1;// край снизу
                    if (i === 0) i++;// край сверху
                    if (j === 0) j++;// край слева


                    var elem = document.getElementById(i + '_' + j);

                    if (!elem.hasAttribute('boom')) {
                        elem.style.backgroundColor = "white";
                        elem.style.color = "black";
                        boomCount(elem);

                    }
                }
            }

            for(var i = id[0]-1; i < i_max; i += 1){
                for(var j = id[1]-1; j < j_max; j += 1){
                    if (j_max - 1 > parseInt(max_colum)) j_max -= 1;// край справа
                    if (i_max - 1 > parseInt(max_row)) i_max -= 1;// край снизу
                    if (i === 0) i++;// край сверху
                    if (j === 0) j++;// край слева
                    if(i === id[0] && j === id[1]){

                    }else{
                        var elem2 = document.getElementById(i + '_' + j);
                        if(elem2.textContent === "" && !elem2.hasAttribute('boom')){
                            if(openMoreElements.indexOf(elem2) === -1){
                                openMoreElements.push(elem2);
                            }
                        }
                    }
                }
            }

        } else {
            src.style.backgroundColor = "white";
            src.style.color = "black";
        }

        if (openMoreElements.length > 0) {

            if(START_LOOP < openMoreElements.length){
                START_LOOP++;
                // console.log(START_LOOP);
                return open(openMoreElements[START_LOOP]);
            } else{
                openMoreElements = [];
                START_LOOP = -1;
            }
        }





}