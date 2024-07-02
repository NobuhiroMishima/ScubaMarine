const menu = document.querySelector('.nav-menu-sp');
const btn = document.querySelector('.menu-sp');

const menuOpen = function(){
    menu.classList.toggle('menu-open');
}

btn.addEventListener('click', menuOpen);
