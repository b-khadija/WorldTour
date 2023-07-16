const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation-list");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navigation.classList.toggle("active");
});

const buttons = document.querySelectorAll(".nav-slider-btn");
const slides = document.querySelectorAll(".slider-video");
const contents = document.querySelectorAll(".content")



var navigationSlider = function(manual){
  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  buttons[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
}

buttons.forEach((button, i) => {
  button.addEventListener("click", () => {
    navigationSlider(i);
  });
});