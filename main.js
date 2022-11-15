const nextButton = document.querySelector(".next-btn");
const prevButton = document.querySelector(".prev-btn");
let slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const slideIndicator = document.querySelectorAll(".slide-indicator");
const numberofSlides = slides.length;
var slideNumber = 0;

nextButton.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIndicator.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber++;

  if (slideNumber > numberofSlides - 1) {
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
  slideIndicator[slideNumber].classList.add("active");
});

prevButton.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slideIndicator.forEach((slideIcon) => {
    slideIcon.classList.remove("active");
  });

  slideNumber--;

  if (slideNumber < 0) {
    slideNumber = numberofSlides - 1;
  }

  slides[slideNumber].classList.add("active");
  slideIndicator[slideNumber].classList.add("active");
});

const loop = () => {
  play = setInterval(() => {
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slideIndicator.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
    });

    slideNumber++;

    if (slideNumber > numberofSlides - 1) {
      slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
    slideIndicator[slideNumber].classList.add("active");
  }, 5000);
};

loop();

slider.addEventListener("mouseover", () => {
  clearInterval(play);
});

slider.addEventListener("mouseout", () => {
  loop();
});

var elem1 = document.querySelector(".latest-section");
var elem2 = document.querySelector(".kdrama-section");
var elem3 = document.querySelector(".cdrama-section");
var elem4 = document.querySelector(".hollywood-section");
var elem5 = document.querySelector(".anime-section");
var elem6 = document.querySelector(".upcoming-section");
var flkty1 = new Flickity(elem1, {
  cellAlign: "left",
  contain: true,
  groupCells: true,
  pageDots: false,
});

var flkty2 = new Flickity(elem2, {
  cellAlign: "left",
  contain: true,
  groupCells: true,
  pageDots: false,
});
var flkty3 = new Flickity(elem3, {
  cellAlign: "left",
  contain: true,
  groupCells: true,
  pageDots: false,
});
var flkty4 = new Flickity(elem4, {
  cellAlign: "left",
  contain: true,
  groupCells: true,
  pageDots: false,
});
var flkty5 = new Flickity(elem5, {
  cellAlign: "left",
  contain: true,
  groupCells: true,
  pageDots: false,
});
var flkty6 = new Flickity(elem6, {
  cellAlign: "left",
  contain: true,
  groupCells: true,
  pageDots: false,
});

const hamburger = document.querySelector(".hamburger-lines");
const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
const nav = document.querySelector(".nav-container");

hamburger.addEventListener("click", () => {
  line1.classList.toggle("transition1");
  line2.classList.toggle("transition2");
  line3.classList.toggle("transition3");
  nav.classList.toggle("show");
});
