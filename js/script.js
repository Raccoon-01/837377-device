var link = document.querySelector(".login-link");
var linkFooter = document.querySelector(".footer-login-link");
var write = document.querySelector(".feedback");
var popup = document.querySelector(".log-in");
var modal = document.querySelector(".feedback-section");
var close = popup.querySelector(".modal-close");
var closeModal = modal.querySelector(".modal-close");
var form = popup.querySelector(".popup-login");
var login = popup.querySelector(".input-login");
var password = popup.querySelector(".input-password");
var isStorageSupport = true;
var storage = "";

try {
	storage = localStorage.getItem("login");
	} catch (err) {
	isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	if (storage) {
		login.value = storage;
		password.focus();
	} else {
		login.focus();
	}
});

linkFooter.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	if (storage) {
		login.value = storage;
		password.focus();
	} else {
		login.focus();
	}
});

write.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal.classList.add("modal-show");
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
	popup.classList.remove("modal-error");
	modal.classList.remove("modal-show");
});

closeModal.addEventListener("click", function (evt) {
	evt.preventDefault();
	modal.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
	if (!login.value || !password.value) {
		evt.preventDefault();
		popup.classList.remove("modal-error");
		popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
		if (isStorageSupport) {
			localStorage.setItem("login", login.value);
			}
		}
});

window.addEventListener("keydown", function (evt) {
	if (evt.keyCode === 27) {
		evt.preventDefault();
	if (popup.classList.contains("modal-show")) {
		popup.classList.remove("modal-show");
		popup.classList.remove("modal-error");
		modal.classList.remove("modal-show");
		}
	}
});

var mapLink = document.querySelector(".contacts-map");
var mapPopup = document.querySelector(".hidden-modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
	evt.preventDefault();
	if (evt.keyCode === 27) {
	if (mapPopup.classList.contains("modal-show")) {
	mapPopup.classList.remove("modal-show");
	}
	}
});
