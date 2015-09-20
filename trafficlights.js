alert("Javascript file loaded.");
var turn_light = function (light_id, state) {
    var elem = document.getElementById(light_id);
    elem.setAttribute("fill", "lime")
};