// alert("Javascript file loaded.");

var lights = {
    redlight:    {off: 'firebrick',     on: 'orangered'},
    yellowlight: {off: 'darkgoldenrod', on: 'yellow'},
    greenlight:  {off: 'darkgreen',     on:'lime'}
};

var get_color = function(light_id, state) {
    return lights[light_id][state];
};
var turn_light = function (light_id, state) {
    var elem = document.getElementById(light_id);
    elem.setAttribute("fill", get_color(light_id, state))
};
