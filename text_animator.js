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
  