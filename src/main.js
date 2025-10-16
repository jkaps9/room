// Navigation
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("visible");
  });
}

// Slides
let currentSlideId = 1;
const maxSlideId = 3;
const slideComponents = document.querySelectorAll("[data-slideId]");
const previousSlideButton = document.querySelector(".previous");
const nextSlideButton = document.querySelector(".next");

function hideAllComponents() {
  slideComponents.forEach((slideComponent) => {
    slideComponent.classList.add("hidden");
  });
}

function showCurrentComponents() {
  slideComponents.forEach((slideComponent) => {
    if (
      Number(slideComponent.getAttribute("data-slideId")) === currentSlideId
    ) {
      slideComponent.classList.remove("hidden");
    }
  });
}

function handlePreviousClick() {
  if (currentSlideId === 1) {
    currentSlideId = maxSlideId;
  } else {
    currentSlideId--;
  }
}

function handleNextClick() {
  if (currentSlideId === maxSlideId) {
    currentSlideId = 1;
  } else {
    currentSlideId++;
  }
}

previousSlideButton.addEventListener("click", () => {
  handlePreviousClick();
  hideAllComponents();
  showCurrentComponents();
});

nextSlideButton.addEventListener("click", () => {
  handleNextClick();
  hideAllComponents();
  showCurrentComponents();
});
