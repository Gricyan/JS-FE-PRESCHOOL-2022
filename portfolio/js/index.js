// jquery variant, jquery library has to be linked

// $(document).ready(function() {
//   $('.hamburger, .nav-list').click(function(event) {
//     $('.hamburger, .nav').toggleClass('is-active');
//   });
// });

// First working variant as in a rs school task

// const hamburger = document.querySelector('.hamburger');
// const nav = document.querySelector('.nav');
// const navList = document.querySelector('.nav-list');

// function toggleMenu() {
//   hamburger.classList.toggle('is-active');
//   nav.classList.toggle('is-active');
// }

// function closeMenu() {
//   hamburger.classList.remove('is-active');
//   nav.classList.remove('is-active');
// }

// hamburger.addEventListener('click', toggleMenu);
// navList.addEventListener('click', closeMenu);

// Second working variant as in a rs school task

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav-link');

function toggleMenu() {
  hamburger.classList.toggle('is-active');
  nav.classList.toggle('is-active');
}

hamburger.addEventListener('click', toggleMenu);
nav.addEventListener('click', closeMenu);
navLinks.forEach((el) => el.addEventListener('click', closeMenu));

function closeMenu(event) {
  if (event.target.classList.contains('nav-link')) {
    hamburger.classList.remove('is-active');
    nav.classList.remove('is-active');
  }
}

///

console.log('Вёрстка соответствует макету. Ширина экрана 768px +48')
console.log('Включительно до 320px нет горизонтальной полосы прокрутки +15')
console.log('На ширине экрана 768рх и меньше реализовано адаптивное меню +22')