var buttonClose = document.querySelector(".modal-button-close");
var buttonOpen = document.querySelector(".button-map");
var modalWindow = document.querySelector(".modal");

var overlay = document.querySelector(".overlay");

buttonOpen.addEventListener("click", function (event) {
    event.preventDefault();
    modalWindow.classList.add("display-block");
    overlay.classList.add("display-block");
});

buttonClose.addEventListener("click", function (event) {
    event.preventDefault();
    modalWindow.classList.remove("display-block");
    overlay.classList.remove("display-block");
});

overlay.addEventListener("click", function (event) {
    event.preventDefault();
    modalWindow.classList.remove("display-block");
    overlay.classList.remove("display-block");
});

