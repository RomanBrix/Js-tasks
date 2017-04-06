/**
 * Created by RomanBrix on 4/4/17.
 */
'use strict';
var btn = document.getElementById('create').addEventListener('click', addTable);

function addTable() {
    var numRows     = document.getElementById("rows"),
        numColumns  = document.getElementById("columns"),
        rows        = numRows.value,
        columns     = numColumns.value,
        tr          = "",
        td          = "",
        firstTable  = document.querySelector("table"),
        table       = document.createElement("table"),
        insertTable = document.getElementById('insertTable');




    for (var i = 0; i < rows; i += 1) {
        tr = document.createElement("tr");

        for (var j = 0; j < columns; j += 1) {

            td = document.createElement("td");
            td.id = (i + 1) + "_" + (j + 1);
            tr.appendChild(td);

            if(Math.random() < 0.1){

                td.setAttribute('boom');
            }

        }

        table.appendChild(tr);
    }


    // table.addEventListener('click', firstClick);
    table.addEventListener('click', changeColor);

    table.addEventListener('contextmenu', rightClick);
    //  table.oncontextmenu = rightClick;





    if (firstTable == null) {
        return insertTable.appendChild(table);
    } else {
        var newTable = insertTable.appendChild(table);
        return insertTable.replaceChild(newTable, firstTable);
    }
}

//Исправил баг, позже сделаю и эту функцию;

// function firstClick(e){
//     var src,
//         tab = document.querySelector("table"),
//         td = tab.getElementsByTagName('td');
//     e = e || window.event;
//     src = e.target || e.srcElement;
//     if (src.nodeName.toLowerCase() !== "td" ){
//         return;
//     }
//     if(getComputedStyle(src).backgroundColor === "rgb(0, 128, 0)") {
//         return;
//     }
//
//     for(var i = 0; i < td.length; i++){
//         if(Math.random() < 0.1 && td[i] !== src){
//
//             td[i].setAttribute('boom');
//         }
//     }
//     boomCount(src);
//     src.style.backgroundColor = "white";
//     src.style.color = "black";
//     src.setAttribute('check',"1");
//     open(src);
//     tab.removeEventListener('click', firstClick);
//     tab.addEventListener('click', changeColor);
//
//     var stopProp = typeof e.stopPropagation,
//         stopDefault = typeof  e.preventDefault();
//     stopProp === "function" ? e.stopPropagation() : console.log();
//     stopDefault === "function" ? e.preventDefault() : console.log();
// }

function changeColor(e) {
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




var openMoreElements = [],
    START_LOOP = -1;


function open(src) {

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






function boomCount(src) {

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




function rightClick(e) {
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




function win(){
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