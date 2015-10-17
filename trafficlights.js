// alert("Javascript file loaded.");
var Light = function(off, on, id) {
    this.off = off;
    this.on = on;
    this.id = id;
    this.turn_light('off');
};

Light.prototype.get_color = function(on_off) {
    return this[on_off];
};

Light.prototype.turn_light = function(on_off) {
    var elem = document.getElementById(this.id);
    elem.setAttribute("fill", this.get_color(on_off))
};

var TrafficLight = function() {
    this.redlight = new Light('firebrick', 'orangered', 'redlight');  
    this.yellowlight = new Light('darkgoldenrod', 'yellow', 'yellowlight');
    this.greenlight = new Light('darkgreen', 'lime', 'greenlight');
    this.currentlight = 'redlight';
    this.cycle_lights();
};

TrafficLight.prototype.cycle_lights = function() {
    this[this.currentlight].turn_light("off");
    switch (this.currentlight) {
    case "redlight":
	this.currentlight = "greenlight";
	break;
    case "greenlight":
	this.currentlight = "yellowlight";
	break;
    case "yellowlight":
	this.currentlight = "redlight";
	break;
    }
    this[this.currentlight].turn_light("on");
};

