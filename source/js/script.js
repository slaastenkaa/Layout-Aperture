const navClose = document.querySelector('.page-header__closed');
const navButton = document.querySelector('.nav__button-close');

navClose.classList.remove('page-header__nojs');

navButton.addEventListener('click', function () {
  if (navClose.classList.contains('page-header__opened')) {
    navClose.classList.remove('page-header__opened');
    navClose.classList.add('page-header__closed');
  } else {
    navClose.classList.add('page-header__opened');
    navClose.classList.remove('page-header__closed');
  }
});
