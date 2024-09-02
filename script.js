// Detect click-jacking

if (window.top !== window.self) {
    window.top.location = window.location;
  }

  <script>
document.getElementById('menu-hamb').addEventListener('click', function() {
    var navLink = document.getElementById('nav-link');
    navLink.classList.toggle('show');
});
</script>


// Caroussel
// const caroussel = document.querySelector('.caroussel');
// const slides = document.querySelectorAll('.caroussel-images');
// const leftArrow = document.querySelector('.left-arrow');
// const rightArrow = document.querySelector('.right-arrow');

// let currentIndex = 0;

// rightArrow.addEventListener('click', () => {
//     if (currentIndex < slides.length - 1) {
//         currentIndex++;
//     } else {
//         currentIndex = 0; // Reviens au début si tu es à la fin
//     }
//     updateCaroussel();
// });

// leftArrow.addEventListener('click', () => {
//     if (currentIndex > 0) {
//         currentIndex--;
//     } else {
//         currentIndex = slides.length - 1; // Va à la fin si tu es au début
//     }
//     updateCaroussel();
// });

// function updateCaroussel() {
//     const slideWidth = slides[0].clientWidth;
//     caroussel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
// }
