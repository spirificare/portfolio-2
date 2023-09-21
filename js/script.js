'use strict';

const menuBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__right');

if (menuBurger && headerMenu) {
   menuBurger.addEventListener('click', () => {
      document.body.classList.toggle('_lock');
      menuBurger.classList.toggle('_active');
      headerMenu.classList.toggle('_active');
   });
}

const reservation = document.querySelector('.header__button');
const formSection = document.querySelector('.registration');

if (reservation && formSection) {
   reservation.addEventListener('click', () => {
      formSection.scrollIntoView({ behavior: 'smooth' });
      document.querySelector('.form-registr__wrapper:first-child .form-registr__field').focus({ preventScroll: true });
   });
}


