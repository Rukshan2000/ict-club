// ------------------ Mobile Menu Toggle ------------------

const toggleButton = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
const navMenu = document.getElementById('navbar-sticky');

// Toggle the mobile menu visibility
toggleButton.addEventListener('click', () => {
    const expanded = toggleButton.getAttribute('aria-expanded') === 'true' || false;
    toggleButton.setAttribute('aria-expanded', !expanded);
    navMenu.classList.toggle('hidden');
});

// ------------------ Carousel Scroll ------------------
// Carousel navigation
const carouselContainer = document.getElementById('carousel-container');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Scroll to the previous card
prevBtn.addEventListener('click', () => {
    carouselContainer.scrollBy({
        left: -carouselContainer.offsetWidth,
        behavior: 'smooth'
    });
});

// Scroll to the next card
nextBtn.addEventListener('click', () => {
    carouselContainer.scrollBy({
        left: carouselContainer.offsetWidth,
        behavior: 'smooth'
    });
});


