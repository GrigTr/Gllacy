var slider1 = document.getElementById("product-1");
var slider2 = document.getElementById("product-2");
var slider3 = document.getElementById("product-3");

var button1 = document.querySelector("label[btn-1]");
var button2 = document.querySelector("label[btn-2]");
var button3 = document.querySelector("label[btn-3]");

var currentSlide = 0;

button1.addEventListener("click", function (event) {
    currentSlide = slider1;
});

button2.addEventListener("click", function (event) {
    currentSlide = slider2;
});

button3.addEventListener("click", function (event) {
    currentSlide = slider3;
});

var changeSliders = setInterval(function () {
   
    if (!currentSlide) {
       slider1.checked = false;
       slider2.checked = true;
        currentSlide = slider2;
   } else if (currentSlide === slider2) {
       slider2.checked = false;
       slider3.checked = true;
       currentSlide = slider3;
   } else if (currentSlide = slider3) {
       slider3.checked = false;
       slider1.checked = true;
       currentSlide = 0;
   }
}, 5000);