//
// var matrix = [[,,,,,,],[,,,,,,],[,,,,,,],[,,,,,,],[,,,,,,],[,,,,,,],[,,,,,,]];
//
//
//
// // console.log(matrix[0][1]);
//
//
//
//
// for (var i = 0; i < matrix.length; i++) {
//     var matrix = [[,,,,,,],[,,,,,,],[,,,,,,],[,,,,,,],[,,,,,,],[,,,,,,],[,,,,,,]];
//        for (var j = 0; j < 7; j++) {
//         var p = document.createElement("p");
//         matrix[i][j].appendChild(p);
//        }
//
// }
//     console.log(matrix[0][1]);





var body = document.getElementsByTagName("body")



//    launcher     //
var launch = document.createElement("table");
launch.id = "launch"
var containerLaunch = document.createElement("section");
body[0].appendChild(containerLaunch);
containerLaunch.appendChild(launch);

for (var i = 0; i < 1; i++) {
        var tr = document.createElement("tr");
        launch.appendChild(tr);
        for (var j = 0; j < 7; j++) {
            var td = document.createElement("td");
            td.className = "depart";
            tr.appendChild(td);
        }
}

//    plateau de Jeux     //
var containerTab = document.createElement("section");
body[0].appendChild(containerTab);

var tab = document.createElement("table");
tab.id = "plateau"
containerTab.appendChild(tab);

 for (var i = 0; i < 6; i++) {
        var tr = document.createElement("tr");
        tab.appendChild(tr);
        for (var j = 0; j < 7; j++) {
                var td = document.createElement("td");
                td.className = "cellule";
                tr.appendChild(td);
        }

 }

// var cell = document.getElementsByClassName("cellule");

var plateau = document.getElementById('plateau');
var grill = Array.from(plateau);
//plateau.rows[2].cells[5].style.backgroundColor = "red"

// console.log(grillCell[1]);
for(var j = 0; j< grill.length; j++){


    console.log("grill");

}


// var resultGrill =

var depart = Array.from(document.getElementsByClassName('depart'));
for (var i = 0; i < depart.length; i++) {
    function drop() {
        var colIndex = depart.indexOf(this);
         var rowIndex = 5;





         plateau.rows[rowIndex].cells[colIndex].style.backgroundColor = "red"


    }

            depart[i].addEventListener("click", drop);



}
