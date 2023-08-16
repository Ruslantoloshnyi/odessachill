"use strict"

function activeBurger() {
    const headerBurger = document.querySelector('.header__burger');
    const headerMenu = document.querySelector('.header__menu');
    const bodyNow = document.querySelector('body');
    
    headerBurger.addEventListener('click', function () {
        headerBurger.classList.toggle('active');
        headerMenu.classList.toggle('active');
        bodyNow.classList.toggle('lock');
    })
};
activeBurger();
