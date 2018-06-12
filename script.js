var launcher = [1,1,1,1,1,1,1];
var body = document.getElementsByTagName("body")
var matrix = [[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0],[0,0,0,0,0,0]];

var containerLaunch = document.createElement("section");
body[0].appendChild(containerLaunch);
var containerTab = document.createElement("section");
body[0].appendChild(containerTab);


// containerTab.appendChild(matrix);

for (var i = 0; i < launcher.length; i++) {
    containerLaunch.appendChild(launcher[i]);
}
