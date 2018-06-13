var mainElmt = document.getElementById("contain");

var dropZoneTable = document.createElement("table");
dropZoneTable.className = "dropzone";
var dropZoneLine = document.createElement("tr");
var players = [ "player1", "player2"]
var roundCount = 0;

for (var i = 0; i < 6; i++) {
    var dropZoneCell = document.createElement("td");
    dropZoneCell.className = "dropcell-" +i;
    dropZoneCell.addEventListener("click", function() {
        roundCount ++;
        var elementClass = this.className;
        var collIndex = parseInt(elementClass.replace("dropcell-",""));
        var selectdColunms = document.getElementsByClassName("col-"+ collIndex) ;
        console.log(selectdColunms);
        var cpt = 0;
        while (cpt< selectdColunms.length) {
            if(selectdColunms[cpt].className.indexOf("player") != -1){

                break;
            }
            cpt++;

        }
        selectdColunms[cpt-1].className += " " + players[roundCount % players.length];
    });

    dropZoneLine.appendChild(dropZoneCell);
}

dropZoneTable.appendChild(dropZoneLine);
mainElmt.appendChild(dropZoneTable);

var puissance4Table =document.createElement("table");
puissance4Table.className="puissance4";
for (var i = 0; i < 7; i++) {
    var puissance4Line = document.createElement("tr");
    for (var j = 0; j < 6 ; j++) {
        var puissance4Cell = document.createElement("td");
        puissance4Cell.className = "col-" +j;
        puissance4Line.appendChild(puissance4Cell);
    }

    puissance4Table.appendChild(puissance4Line);
}

mainElmt.appendChild(puissance4Table);
