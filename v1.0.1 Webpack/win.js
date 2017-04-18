/**
 * Created by RomanBrix on 4/18/17.
 */
module.exports = function win() {

        var tab = document.querySelector("table"),
            td = tab.querySelectorAll('td[boom]');
        var WIN = [];
        for(var i = 0; i < td.length; i+=1){

            if(getComputedStyle(td[i]).backgroundColor === "rgb(0, 0, 0)"){
                WIN.push(false);
            }else if(getComputedStyle(td[i]).backgroundColor === "rgb(0, 128, 0)"){
                WIN.push(true);
            }

        }
        if(WIN.indexOf(false) === -1){
            alert ("WIN!");
            tab.removeEventListener('click', changeColor);
            tab.removeEventListener("contextmenu", rightClick);

        }

        // console.log(tab,td);

}