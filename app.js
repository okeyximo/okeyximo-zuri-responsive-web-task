const mainMenu = document.querySelector('.nav-links');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');





openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', closee);

function show() {
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
}
function closee() {
    mainMenu.style.top = '-100%';
}