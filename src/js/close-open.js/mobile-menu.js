const openBtn = document.querySelector('.mobil-menu-btn')
const closeBtn = document.querySelector('.menu-close-btn');   
const menuContent = document.querySelector('.mobile-menu'); 

openBtn.addEventListener('click', () => {
  menuContent.classList.add('is-open');
});

closeBtn.addEventListener('click', () => {
  menuContent.classList.remove('is-open'); 
});