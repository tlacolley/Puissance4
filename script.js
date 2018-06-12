
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
            td.className = "départ";
            tr.appendChild(td);
        }
}

//    plateau de Jeux     //
var tab = document.createElement("table");
var containerTab = document.createElement("section");
body[0].appendChild(containerTab);

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

function drop() {

}
var départ = document.getElementsByClassName('départ');
    for (var i = 0; i < départ.length; i++) {
        départ[i].addEventListener("click", drop);
    }
