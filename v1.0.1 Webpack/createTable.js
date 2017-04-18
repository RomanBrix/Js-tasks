/**
 * Created by RomanBrix on 4/18/17.
 */
let changeColor = require('./changeColor.js');
let rightClick = require('./rightClick.js');

module.exports = function createTabble() {


    var numRows = document.getElementById("rows"),
        numColumns = document.getElementById("columns"),
        rows = numRows.value,
        columns = numColumns.value,
        tr = "",
        td = "",
        firstTable = document.querySelector("table"),
        table = document.createElement("table"),
        insertTable = document.getElementById('insertTable');


    for (var i = 0; i < rows; i += 1) {
        tr = document.createElement("tr");

        for (var j = 0; j < columns; j += 1) {

            td = document.createElement("td");
            td.id = (i + 1) + "_" + (j + 1);
            tr.appendChild(td);

            if (Math.random() < 0.1) {

                td.setAttribute('boom');
            }

        }

        table.appendChild(tr);
    }


    // table.addEventListener('click', firstClick);
    table.addEventListener('click', changeColor);

    table.addEventListener('contextmenu', rightClick);
    //  table.oncontextmenu = rightClick;


    if (firstTable === null) {
        return insertTable.appendChild(table);
    } else {
        var newTable = insertTable.appendChild(table);
        return insertTable.replaceChild(newTable, firstTable);
    }

}