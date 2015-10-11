// alert("Javascript file loaded.");
var current_color = "redlight";

var lights = {
    redlight:    {off: 'firebrick',     on: 'orangered'},
    yellowlight: {off: 'darkgoldenrod', on: 'yellow'},
    greenlight:  {off: 'darkgreen',     on:'lime'}
};

var get_color = function(light_id, state) {
    return lights[light_id][state];
};
var turn_light = function(light_id, state) {
    var elem = document.getElementById(light_id);
    elem.setAttribute("fill", get_color(light_id, state))
};
var cycle_lights = function () {
    turn_light(current_color, "off");
    switch (current_color) {
    case "redlight":
	current_color = "greenlight";
	break;
    case "greenlight":
	current_color = "yellowlight";
	break;
    case "yellowlight":
	current_color = "redlight";
	break;
    }
    turn_light(current_color, "on");
};