const menuTop = document.querySelector('.nav-menu-sp-top');
const menuBtm = document.querySelector('.nav-menu-sp-btm');
const btnTop = document.querySelector('.menu-sp-top');
const btnBtm = document.querySelector('.menu-sp-btm');

const menuOpenTop = function(){
    menuTop.classList.toggle('menu-open');
}
const menuOpenBtm = function(){
    menuBtm.classList.toggle('menu-open');
}

btnTop.addEventListener('click', menuOpenTop);
btnBtm.addEventListener('click', menuOpenBtm);
