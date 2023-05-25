export function responsiveMenu(){
const openMenu = document.querySelector('#open-menu');
const closeMenu = document.querySelector('#close-menu');

const menu = document.querySelector('.nav-list');

openMenu.addEventListener('click',toggleMenu);

function toggleMenu(){
    openMenu.style.display = 'none';
    closeMenu.style.display = 'block';
    menu.classList.toggle('active-responsive-menu');


}

closeMenu.addEventListener('click',toggleCloseMenu);

function toggleCloseMenu(){
    closeMenu.style.display = 'none';
    openMenu.style.display = 'block';
    menu.classList.remove('active-responsive-menu');
}


}