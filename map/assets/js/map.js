// initialize the map
var map = L.map('map').setView([0, 0], 2);

// load a tile layer
L.tileLayer('assets/images/tiles/overworld/{z}/{x}/{y}.jpg', {
	minZoom: 2,
	maxZoom: 5,
	continuousWorld: false,
	noWrap: true,
}).addTo(map);