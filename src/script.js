const navLeft = document.getElementById('nav-left');
const navBar = document.querySelector('nav');
const menuButton = document.getElementById('menu-button');
const menuClose = document.getElementById('menu-close');

menuButton.addEventListener('click', () => {
    navBar.classList.replace('hidden', 'block');
    navLeft.classList.replace('hidden', 'block');
});

menuClose.addEventListener('click', () => {
    navBar.classList.replace('block', 'hidden');
    navLeft.classList.replace('block', 'hidden');
});