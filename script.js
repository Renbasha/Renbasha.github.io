// Detect click-jacking

if (window.top !== window.self) {
    window.top.location = window.location;
  }
  
const caroussel = document.querySelector('.caroussel');
const slides = document.querySelectorAll('.caroussel-images');
const leftArrow = document.querySelector('.fa-caret-left');
const rightArrow = document.querySelector('.fa-caret-right');

let currentIndex = 0;

rightArrow.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Reviens au début si tu es à la fin
    }
    updateCaroussel();
});

leftArrow.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 1; // Va à la fin si tu es au début
    }
    updateCaroussel();
});

function updateCaroussel() {
    const slideWidth = slides[0].clientWidth;
    caroussel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}
