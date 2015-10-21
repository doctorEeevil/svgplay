var Light = function(off, on, id, svg_elem, x_offset) {
    this.off = off;
    this.on = on;
    this.id = id;
    this.build_circle(svg_elem, x_offset);
    this.turn_light('off');
};

Light.prototype.build_circle = function(svg_elem, x_offset) {
    var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', x_offset);
    circle.setAttribute('cy', '100');
    circle.setAttribute('r', '48');
    circle.setAttribute('id', this.id);
    circle.setAttribute('fill', this.off);
    circle.setAttribute('stroke', 'black');
    circle.setAttribute('stroke-width', '3');
    svg_elem.appendChild(circle);
    this.circle = circle;
};

Light.prototype.get_color = function(on_off) {
    return this[on_off];
};

Light.prototype.turn_light = function(on_off) {
    this.circle.setAttribute("fill", this.get_color(on_off))
};

var TrafficLight = function() {
    var x_jump = 100;
    this.build_svg();
    this.x_offset = 150;
    this.redlight = new Light(
	'firebrick', 'orangered', 'redlight', this.svg_elem, this.x_offset);
    this.x_offset += x_jump;
    this.yellowlight = new Light(
	'darkgoldenrod', 'yellow', 'yellowlight', this.svg_elem, this.x_offset);
    this.x_offset += x_jump;
    this.greenlight = new Light(
       	'darkgreen', 'lime', 'greenlight', this.svg_elem, this.x_offset);
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

TrafficLight.prototype.build_svg = function() {
    var body = document.getElementsByTagName('body')[0];
    var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns','http://www.w3.org/2000/svg');
    svg.setAttribute('version','1.1');
    svg.setAttribute('width','500px');
    svg.setAttribute('height','250px');
    var me = this;
    svg.onclick = function() {
	me.cycle_lights()
    };
    body.appendChild(svg);
    this.svg_elem = svg;
};