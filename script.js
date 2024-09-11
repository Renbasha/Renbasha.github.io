// Detect click-jacking

if (window.top !== window.self) {
    window.top.location = window.location;
  }

// Trouver le parent direct
let child = document.querySelector('.child');
let parent = child.parentElement;
console.log(parent); // Affiche <div class="parent">...</div>

