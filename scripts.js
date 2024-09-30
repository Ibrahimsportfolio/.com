

function updateTextColor() {
    const navLinks = document.querySelectorAll('nav li a');
    if (window.innerWidth <= 768) { // Mobile view threshold
        navLinks.forEach(link => {
            link.style.color = 'white';
        });
    } else {
        navLinks.forEach(link => {
            link.style.color = 'black';
        });
    }
}
function updateTextColor() {
    const navLinks = document.querySelectorAll('nav li a');
    if (window.innerWidth <= 768) { // Mobile view threshold
        navLinks.forEach(link => {
            link.style.color = 'white';
        });
    } else {
        navLinks.forEach(link => {
            link.style.color = 'black';
        });
    }
}
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Paths to your hamburger and close icons
const hamburgerIconPath = './m2i8i8A0K9A0H7b1_0_-removebg-preview.png'; // Ensure this path is correct
const closeIconPath = './01fe6447fbd35f56bf5b36ce07e7fabb-removebg-preview.png'; // Ensure this path is correct

// Hamburger menu toggle
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');

    // Change icon based on menu visibility
    if (navLinks.classList.contains('show')) {
        hamburger.src = '01fe6447fbd35f56bf5b36ce07e7fabb-removebg-preview.png'; // Change to close icon
    } else {
        hamburger.src = '/m2i8i8A0K9A0H7b1_0_-removebg-preview.png ';
    }
});
hamburger.style.width = '46px';
hamburger.style.height = '30px';

// Update on page load
updateTextColor();

// Update on window resize
window.addEventListener('resize', updateTextColor);
/*document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.querySelector('.card-container');

    // Example: Auto-scroll to the right and loop back to the start
    let scrollAmount = 0;
    const scrollStep = 1;
    const delay = 30; // milliseconds

    function autoScroll() {
        if (scrollAmount >= cardContainer.scrollWidth - cardContainer.clientWidth) {
            scrollAmount = 0;
        } else {
            scrollAmount += scrollStep;
        }
        cardContainer.scrollLeft = scrollAmount;
    }

    setInterval(autoScroll, delay);
});

document.addEventListener('DOMContentLoaded', () => {
  const cardContainer = document.querySelector('.card-container2');

  // Example: Auto-scroll to the right and loop back to the start
  let scrollAmount = 0;
  const scrollStep = 1;
  const delay = 30; // milliseconds

  function autoScroll() {
    if (scrollAmount >= cardContainer.scrollWidth - cardContainer.clientWidth) {
      scrollAmount = 0;
    } else {
      scrollAmount += scrollStep;
    }
    cardContainer.scrollLeft = scrollAmount;
  }

  setInterval(autoScroll, delay);
});

        
        
 document.addEventListener('DOMContentLoaded', () => {
  const cardContainer = document.querySelector('.card-container3');

  // Example: Auto-scroll to the right and loop back to the start
  let scrollAmount = 0;
  const scrollStep = 1;
  const delay = 30; // milliseconds

  function autoScroll() {
    if (scrollAmount >= cardContainer.scrollWidth - cardContainer.clientWidth) {
      scrollAmount = 0;
    } else {
      scrollAmount += scrollStep;
    }
    cardContainer.scrollLeft = scrollAmount;
  }

  setInterval(autoScroll, delay);
});
       
*/        
        
 
document.addEventListener("DOMContentLoaded", () => {
    const overlay = document.getElementById('overlay');
    const company1 = document.getElementById('company1');
    const content = document.getElementById('content');

    // Show the first company name
    setTimeout(() => {
        company1.classList.add('show');
    }, 0); // Slight delay to ensure transition

    // Show the second company name after the first one
    setTimeout(() => {
        company1.classList.remove('show');
    }, 3000); // 3 seconds after the first company name

    // Hide the overlay and show the actual content
    setTimeout(() => {
        overlay.style.display = 'none';
        content.style.display = 'block';
    }, 6000); // 3 seconds after the second company name
});





const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for recuded motion, then we add the animation
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller) => {
    // add data-animated="true" to every `.scroller` on the page
    scroller.setAttribute("data-animated", true);

    // Make an array from the elements within `.scroller-inner`
    const scrollerInner = scroller.querySelector(".scroller__inner");
    const scrollerContent = Array.from(scrollerInner.children);

    // For each item in the array, clone it
    // add aria-hidden to it
    // add it into the `.scroller-inner`
    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}
