
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


document.getElementById('burger-menu').addEventListener('click', function() {
    const drawer = document.getElementById('drawer');
    const burger = document.getElementById('burger-menu');
    
    drawer.classList.toggle('open');
    burger.classList.toggle('open');
});

