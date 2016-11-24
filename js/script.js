var link = document.querySelector(".feedback-button");
var popup = document.querySelector(".feedback-form");
var overlay = document.querySelector(".modal-overlay")
var close = popup.querySelector(".feedback-close");
var login = popup.querySelector("[name=feedback-name]");
link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("feedback-form-show");
	overlay.classList.add("modal-overlay-show");
	login.focus();
});
close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("feedback-form-show");
	overlay.classList.remove("modal-overlay-show");
});
function initialize() {
	var mapOptions = {
		zoom: 15,
		center: new google.maps.LatLng(59.9386865,30.3207383)
}
var map = new google.maps.Map(document.getElementById('map-block'),
mapOptions);
var image = "img/map-pin.png";
var myLatLng = new google.maps.LatLng(59.938,30.320);
var beachMarker = new google.maps.Marker({
		position: myLatLng,
		map: map,
		icon: image
	});
}
google.maps.event.addDomListener(window, 'load', initialize);