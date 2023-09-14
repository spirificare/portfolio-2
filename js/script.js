'use strict';

const menuBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__right');

if (menuBurger && headerMenu) {
   menuBurger.addEventListener('click', function (e) {
      document.body.classList.toggle('_lock');
      menuBurger.classList.toggle('_active');
      headerMenu.classList.toggle('_active');
   })
}

window.addEventListener('scroll', () => {
   const headerElement = document.querySelector('.header');
   if (headerElement) {
      headerElement.classList.toggle('_scroll', window.scrollY > 0);
   }
});

const reservation = document.querySelector('.header__button');
const formSection = document.querySelector('.form-registr');

reservation.addEventListener('click', () => {
   formSection.scrollIntoView({ behavior: 'smooth'});
   document.querySelector('.first-field').focus({ preventScroll: true });
})