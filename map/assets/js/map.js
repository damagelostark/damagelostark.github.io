// variables
//var mapSW = [0, 8192];
//	mapNE = [8192, 0];

// declare map object
var map = L.map('map').setView([0, 0], 3);
map.removeControl(map.zoomControl);
map.attributionControl.setPrefix(false);

// reference the tiles

L.tileLayer('assets/images/tiles/overworld/{z}/{x}/{y}.jpg', {
		center: [0, 0],
		minZoom: 3,
		maxZoom: 5,
		continuousWorld: false,
		noWrap: true,
		crs: L.CRS.Simple,
	}).addTo(map);

//map.setMaxBounds(new L.LatLngBounds(
//	map.unproject(mapSW, map.getMaxZoom()),
//	map.unproject(mapNE, map.getMaxZoom())
//));

// icons
var port_krona_icon = L.icon({
	iconUrl: 'assets/images/zones/port_krona_icon.png',
	iconSize: [32, 32],
	iconAnchor: [16, 32]
});

var vern_castle_icon = L.icon({
	iconUrl: 'assets/images/zones/vern_castle_icon.png',
	iconSize: [32, 32],
	iconAnchor: [16, 32]
});

var rania_village_icon = L.icon({
	iconUrl: 'assets/images/zones/rania_village_icon.png',
	iconSize: [32, 32],
	iconAnchor: [16, 32]
});

var parna_forest_icon = L.icon({
	iconUrl: 'assets/images/zones/parna_forest_icon.png',
	iconSize: [32, 32],
	iconAnchor: [16, 32]
});

var vernese_forest_icon = L.icon({
	iconUrl: 'assets/images/zones/vernese_forest_icon.png',
	iconSize: [32, 32],
	iconAnchor: [16, 32]
});

var fesnar_highland_icon = L.icon({
	iconUrl: 'assets/images/zones/fesnar_highland_icon.png',
	iconSize: [32, 32],
	iconAnchor: [16, 32]
});

var balankar_mountains_icon = L.icon({
	iconUrl: 'assets/images/zones/balankar_mountains_icon.png',
	iconSize: [32, 32],
	iconAnchor: [16, 32]
});

// markers and popups
var marker = L.marker([0, 0], {
	draggable: true,
})
marker.bindPopup('');

marker.on('dragend', function(e) {
	marker.getPopup().setContent('Coords ' + marker.getLatLng().toString() + '<br/>' + 'Pixels ' + map.project(marker.getLatLng(), map.getMaxZoom().toString())).openOn(map);
});

// layer groups
var area = L.layerGroup().addTo(map);
var island = L.layerGroup().addTo(map);

var overlays = {
	"Areas" : area,
	//"Islas" : island,
}

var areaTooltip = {
  'className': 'area-tooltip'
}

// north vern
var port_krona = L.marker(map.unproject([4728, 3795], map.getMaxZoom()), {icon:port_krona_icon}).bindTooltip('Puerto de Krona', {direction: 'center', permanent: true, offset: [0, 6], ...areaTooltip}, areaTooltip).addTo(area);
var	vern_castle = L.marker(map.unproject([4360, 3940], map.getMaxZoom()), {icon:vern_castle_icon}).bindTooltip('Berna', {direction: 'center', permanent: true, offset: [0, 6], ...areaTooltip}, areaTooltip).addTo(area);
var	rania_village = L.marker(map.unproject([4350, 3625], map.getMaxZoom()), {icon:rania_village_icon}).bindTooltip('Aldea Rania', {direction: 'center', permanent: true, offset: [0, 6], ...areaTooltip}, areaTooltip).addTo(area);
var	parna_forest = L.marker(map.unproject([4526, 3555], map.getMaxZoom()), {icon:parna_forest_icon}).bindTooltip('Bosque de Parna', {direction: 'center', permanent: true, offset: [0, 6], ...areaTooltip}, areaTooltip).addTo(area);
var	vernese_forest = L.marker(map.unproject([4324, 3454], map.getMaxZoom()), {icon:vernese_forest_icon}).bindTooltip('Bosque Bernés', {direction: 'center', permanent: true, offset: [0, 6], ...areaTooltip}, areaTooltip).addTo(area);
var	fesnar_highland = L.marker(map.unproject([4012, 3617], map.getMaxZoom()), {icon:fesnar_highland_icon}).bindTooltip('Montañas de Fesnar', {direction: 'center', permanent: true, offset: [0, 6], ...areaTooltip}, areaTooltip).addTo(area);
var	balankar_mountains = L.marker(map.unproject([4144, 3839], map.getMaxZoom()), {icon:balankar_mountains_icon}).bindTooltip('Montañas de Balankar', {direction: 'center', permanent: true, offset: [0, 6], ...areaTooltip}, areaTooltip).addTo(area);

// icon resize
map.on('zoomend', function() {
	var currentZoom = map.getZoom();
	port_krona_icon = new L.Icon({
		iconUrl: 'assets/images/zones/port_krona_icon.png',
		iconSize: [8*(map.getZoom()+2), 8*(map.getZoom()+2)],
		iconAnchor: [5*(map.getZoom()+1), 8*(map.getZoom()+2)],
	});
	port_krona.setIcon(port_krona_icon);
	
	vern_castle_icon = new L.Icon({
		iconUrl: 'assets/images/zones/vern_castle_icon.png',
		iconSize: [8*(map.getZoom()+2), 8*(map.getZoom()+2)],
		iconAnchor: [5*(map.getZoom()+1), 8*(map.getZoom()+2)],
	});
	vern_castle.setIcon(vern_castle_icon);
	
	rania_village_icon = new L.Icon({
		iconUrl: 'assets/images/zones/rania_village_icon.png',
		iconSize: [8*(map.getZoom()+2), 8*(map.getZoom()+2)],
		iconAnchor: [5*(map.getZoom()+1), 8*(map.getZoom()+2)],
	});
	rania_village.setIcon(rania_village_icon);

	parna_forest_icon = new L.Icon({
		iconUrl: 'assets/images/zones/parna_forest_icon.png',
		iconSize: [8*(map.getZoom()+2), 8*(map.getZoom()+2)],
		iconAnchor: [5*(map.getZoom()+1), 8*(map.getZoom()+2)],
	});
	parna_forest.setIcon(parna_forest_icon);

	vernese_forest_icon = new L.Icon({
		iconUrl: 'assets/images/zones/vernese_forest_icon.png',
		iconSize: [8*(map.getZoom()+2), 8*(map.getZoom()+2)],
		iconAnchor: [5*(map.getZoom()+1), 8*(map.getZoom()+2)],
	});
	vernese_forest.setIcon(vernese_forest_icon);
	
	fesnar_highland_icon = new L.Icon({
		iconUrl: 'assets/images/zones/fesnar_highland_icon.png',
		iconSize: [8*(map.getZoom()+2), 8*(map.getZoom()+2)],
		iconAnchor: [5*(map.getZoom()+1), 8*(map.getZoom()+2)],
	});
	fesnar_highland.setIcon(fesnar_highland_icon);
	
	balankar_mountains_icon = new L.Icon({
		iconUrl: 'assets/images/zones/balankar_mountains_icon.png',
		iconSize: [8*(map.getZoom()+2), 8*(map.getZoom()+2)],
		iconAnchor: [5*(map.getZoom()+1), 8*(map.getZoom()+2)],
	});
	balankar_mountains.setIcon(balankar_mountains_icon);
});

// add layer control
L.control.layers(null, overlays, {collapsed:false}).addTo(map);

// disable right click menu
document.addEventListener('contextmenu', event => event.preventDefault());
