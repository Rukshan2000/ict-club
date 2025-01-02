// Toggle the mobile menu visibility
const toggleButton = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
const navMenu = document.getElementById('navbar-sticky');

// Event listener for the toggle button
toggleButton.addEventListener('click', () => {
    const expanded = toggleButton.getAttribute('aria-expanded') === 'true' || false;
    toggleButton.setAttribute('aria-expanded', !expanded);
    navMenu.classList.toggle('hidden');
});
