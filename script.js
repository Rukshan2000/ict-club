
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
