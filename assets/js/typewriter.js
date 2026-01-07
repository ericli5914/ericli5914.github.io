const words = ["a Robotics Engineer", "a Mechanical Engineer", "an Electrical Engineer"];
const typewriterText = document.querySelector(".typewriter-text");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 150;

function type() {
  const currentWord = words[wordIndex];
  
  if (!isDeleting) {
    typewriterText.textContent = currentWord.slice(0, charIndex + 1);
    charIndex++;
    
    if (charIndex === currentWord.length) {
      isDeleting = true;
      typingSpeed = 1000;
    } else {
      typingSpeed = 150;
    }
  } else {
    typewriterText.textContent = currentWord.slice(0, charIndex - 1);
    charIndex--;
    
    if (charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typingSpeed = 500;
    } else {
      typingSpeed = 100;
    }
  }
  
  setTimeout(type, typingSpeed);
}

window.addEventListener('DOMContentLoaded', () => {
  type();
});