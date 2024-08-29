// Detect click-jacking

if (window.top !== window.self) {
    window.top.location = window.location;
  }
  