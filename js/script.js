var link = document.querySelector(".feedback");
var modal = document.querySelector(".feedback-section");
var close = modal.querySelector(".modal-close");
var mapLink = document.querySelector(".contacts-map");
var mapPopup = document.querySelector(".hidden-modal-map");
var mapClose = mapPopup.querySelector(".modal-close");
var escapeButton = 27;
/*нижеуказанные переменные для заполнения и валидации формы*/
var form = modal.querySelector(".write-us");
var userName = modal.querySelector(".name-surname");
var userMail = modal.querySelector(".mail");
var userText = modal.querySelector(".textarea-style");
var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("userName" || "userMail");
	} catch (err) {
	isStorageSupport = false;
}

link.addEventListener("click", function(evt) {
	evt.preventDefault();
	modal.classList.add("modal-show");
	if (storage) {
		userName.value = storage;
		userMail.focus();
	} else if (storage) {
		userName.value = storage;
		userMail.value = storage;
		userText.focus();
	} else {
		userName.focus();
	}
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal.classList.remove("modal-show");
	modal.classList.remove("modal-error");
});

mapLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.add("modal-show-map");
});

mapClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.remove("modal-show-map");
});

form.addEventListener("submit", function (evt) {
	if (!userName.value || !userMail.value || !userText.value) {
		evt.preventDefault();
		modal.classList.remove("modal-error");
		modal.offsetWidth = modal.offsetWidth;
		modal.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("userName", userName.value);
			localStorage.setItem("userMail", userMail.value);
			}
		}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === escapeButton) {
		if (modal.classList.contains("modal-show")
		|| mapPopup.classList.contains("modal-show-map")) {
		modal.classList.remove("modal-show");
		mapPopup.classList.remove("modal-show-map");
		modal.classList.remove("modal-error");
		};
	}
});

