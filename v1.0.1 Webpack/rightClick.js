/**
 * Created by RomanBrix on 4/18/17.
 */
let win = require('./win.js');
module.exports = function rightClick(e) {

        var src,
            tabl = document.querySelector("table"),
            tdAll = tabl.getElementsByTagName('td'),
            td_boom = tabl.querySelectorAll('td[boom]'),
            maxGreen = [];

        e = e || window.event;
        src = e.target || e.srcElement;

        if (src.nodeName.toLowerCase() !== "td"){
            return;
        }
        for(var i = 0; i < tdAll.length; i++){
            if(getComputedStyle(tdAll[i]).backgroundColor === "rgb(0, 128, 0)"){
                maxGreen.push(i);
            }
        }
        if(td_boom.length !== 0){

            if (getComputedStyle(src).backgroundColor === "rgb(0, 0, 0)") {
                if(maxGreen.length < td_boom.length) {
                    src.style.backgroundColor = "green";
                } else{
                    alert("so much green...")
                }


            } else if (getComputedStyle(src).backgroundColor === "rgb(0, 128, 0)") {
                src.style.backgroundColor = "black";
            } else {

            }

            win();
        } else{
            alert("Do first move!");
        }




        var stopProp = typeof e.stopPropagation,
            stopDefault = typeof  e.preventDefault();
        stopProp === "function" ? e.stopPropagation() : console.log();
        stopDefault === "function" ? e.preventDefault() : console.log();
}