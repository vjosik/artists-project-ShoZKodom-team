import { lockBodyScroll, unlockBodyScroll } from '../utills/scrolling';

const openBtn = document.querySelector('.mobil-menu-btn');
const closeBtn = document.querySelector('.mm-close-btn');
const menuContent = document.querySelector('.mobile-menu');
const links = document.querySelectorAll('.menu-item');

openBtn.addEventListener('click', () => {
  menuContent.classList.add('is-open');
  document.body.classList.add('no-scroll');
  lockBodyScroll();
});

closeBtn.addEventListener('click', () => {
  menuContent.classList.remove('is-open');
  unlockBodyScroll();
});

links.forEach(link => {
  link.addEventListener('click', () => {
    menuContent.classList.remove('is-open');
    unlockBodyScroll();
  });
});
