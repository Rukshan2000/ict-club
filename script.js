
const carousel = document.querySelector('.carousel-container');
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

nextButton.addEventListener('click', () => {
    carousel.scrollBy({ left: 320, behavior: 'smooth' });
});

prevButton.addEventListener('click', () => {
    carousel.scrollBy({ left: -320, behavior: 'smooth' });
});


function toggleMenu() {
    const menu = document.querySelector('.nav-center');
    menu.classList.toggle('show');
}


// Select the burger menu and the nav-center
const burgerMenu = document.querySelector('.burger-menu');
const navCenter = document.querySelector('.nav-center');

// Add click event to the burger menu to toggle the navigation
burgerMenu.addEventListener('click', () => {
    navCenter.classList.toggle('open');
});

