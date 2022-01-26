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

// Gallery

// Cache Images

const seasons = ['winter', 'spring', 'summer', 'autumn'];

function preloadImages() {
  seasons.forEach(season => {
    for (let i = 1; i <= 6; i++) {
      const img = new Image();
      img.src = `./assets/img/gallery/${season}/${i}.jpg`
    }
  })
}
preloadImages()

// EventListener for season buttons

const portfolioImages = document.querySelectorAll('.portfolio-image')
const portfolioButtons = document.querySelectorAll('.portfolio-btn')

console.log(portfolioButtons)

portfolioButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const seasonButton = button.dataset.season

    portfolioImages.forEach((img, index) => img.src = `./assets/img/gallery/${seasonButton}/${index + 1}.jpg`)

    portfolioButtons.forEach((button) => {
      button.classList.remove('active-btn')
      button.classList.remove('btn-black')
    })
    button.classList.add('active-btn')
  })
})