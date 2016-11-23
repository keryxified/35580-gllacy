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
