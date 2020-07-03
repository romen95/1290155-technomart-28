var mapPopup = document.querySelector(".map-modal");
var mapLink = document.querySelector(".details-info-image-link");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  mapPopup.classList.add("map-modal-show");
});

mapClose.addEventListener("click", function () {
  mapPopup.classList.remove("map-modal-show");
});

var orderPopup = document.querySelector(".order-modal");
var orderLink = document.querySelector(".feedback");
var orderClose = orderPopup.querySelector(".modal-close")
var orderForm = orderPopup.querySelector("form");
var orderLogin = orderPopup.querySelector("[name=login]");
var orderEmail = orderPopup.querySelector("[name=email]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}

orderLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  orderPopup.classList.add("order-modal-show");

  if (storage) {
    orderLogin.value = storage;
    orderEmail.focus();
  } else {
    orderLogin.focus();
  }
});

orderClose.addEventListener("click", function () {
  orderPopup.classList.remove("order-modal-show");
});

orderForm.addEventListener("submit", function (evt) {
  if (!orderLogin.value || !orderEmail.value) {
    evt.preventDefault();
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", orderLogin.value);
    }
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (orderPopup.classList.contains("order-modal-show")) {
      evt.preventDefault();
      orderPopup.classList.remove("order-modal-show");
    }
  }
});
