function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


// text_animator.js
document.addEventListener('DOMContentLoaded', function () {
  const designations = ["Document Controller", "Administrator", "Web Developer", "Youtuber", "Designer"];
  const designationElement = document.querySelector('.section__text__p2');
  const marginTop = window.getComputedStyle(designationElement).marginTop;
  const newMarginBottom = '40px'; // Adjust the bottom margin value as needed

  // Set a dynamic height for the element containing the animating text
  designationElement.style.height = `calc(${designationElement.offsetHeight}px + ${marginTop} + ${newMarginBottom})`;

  function typeDesignations(index) {
    const currentDesignation = designations[index];
    let charIndex = 0;

    function type() {
      if (charIndex < currentDesignation.length) {
        designationElement.textContent += currentDesignation.charAt(charIndex);
        charIndex++;
        setTimeout(type, 100); // Adjust the typing speed here (in milliseconds)
      } else {
        setTimeout(erase, 1000); // Wait for a second, then start erasing
      }
    }

    function erase() {
      if (charIndex > 0) {
        designationElement.textContent = currentDesignation.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 50); // Adjust the erasing speed here (in milliseconds)
      } else {
        setTimeout(function () {
          typeDesignations((index + 1) % designations.length); // Move to the next designation
        }, 500); // Wait for half a second before typing the next designation
      }
    }

    type();
  }

  // Start the animation
  typeDesignations(0);
});

// THE SCRIPT FOR ROLLING TEXT AT EXPERIECES SECTION STARTS HERE
"use strict";

let words = document.querySelectorAll(".word");
words.forEach((word) => {
  let letters = word.textContent.split("");
  word.textContent = "";
  letters.forEach((letter) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.className = "letter";
    word.append(span);
  });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let rotateText = () => {
  let currentWord = words[currentWordIndex];
  let nextWord =
    currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
  // rotate out letters of current word
  Array.from(currentWord.children).forEach((letter, i) => {
    setTimeout(() => {
      letter.className = "letter out";
    }, i * 80);
  });
  // reveal and rotate in letters of next word
  nextWord.style.opacity = "1";
  Array.from(nextWord.children).forEach((letter, i) => {
    letter.className = "letter behind";
    setTimeout(() => {
      letter.className = "letter in";
    }, 340 + i * 80);
  });
  currentWordIndex =
    currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

rotateText();
setInterval(rotateText, 4000);
