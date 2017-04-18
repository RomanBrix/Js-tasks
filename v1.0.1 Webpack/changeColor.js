/**
 * Created by RomanBrix on 4/18/17.
 */

let rightClick = require('./rightClick.js');
let open = require('./open.js');
module.exports = function changeColor(e) {


        var src,
            tab = document.querySelector("table"),
            td = tab.getElementsByTagName('td');
        e = e || window.event;
        src = e.target || e.srcElement;


        //делегирование событий

        if (src.nodeName.toLowerCase() !== "td") {
            return;
        }
        if(getComputedStyle(src).backgroundColor === "rgb(0, 128, 0)") {
            return;
        }

        if(src.hasAttribute('boom')){
            for(var i = 0; i < td.length; i += 1) {
                if(td[i].hasAttribute('boom')){
                    td[i].style.backgroundColor = "red";
                    td[i].style.color = "white";
                    td[i].innerHTML = 'BooM';
                    tab.removeEventListener('click', changeColor);
                    tab.removeEventListener("contextmenu", rightClick);
                }
            }

            setTimeout(function () {
                alert("GameOver");
            },100);


        }else {



            src.style.backgroundColor = "white";
            src.style.color = "black";
            if (src.textContent === "") {
                open(src);
            }


        }



        //предотворить дальнейшее всплытие события
        // и
        // выполнения действия по умолчанию
        var stopProp = typeof e.stopPropagation,
            stopDefault = typeof  e.preventDefault();
        stopProp === "function" ? e.stopPropagation() : console.log("");
        stopDefault === "function" ? e.preventDefault() : console.log("");



}