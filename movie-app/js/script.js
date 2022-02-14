/* SEND REQUEST */

const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c`;

getData(url);

async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data)
}

/* Movies section */

function showMovies(data) {
  let moviesContainer = document.querySelector('.movies');

  moviesContainer.innerHTML = '';

  data.results.forEach((movie) => {

    let src;

    if (movie.poster_path === null) {
      src = "../assets/images/default-img.png"
    } else {
      src = `https://www.themoviedb.org/t/p/w440_and_h660_face${movie.poster_path}`
    }

    const divMovieItem = document.createElement("div");
    divMovieItem.classList.add("movie-item");
    divMovieItem.innerHTML = `   

      <img class="poster" src="${src}">        
        <div class="movie-info">
          <h2>${movie.title}</h2>
          <span>${movie.vote_average}</span>
        </div>
        <div class="movie-overview">
          <h3>Overview</h3>
          <p>${movie.overview}</p>
        </div>
      `
    moviesContainer.appendChild(divMovieItem);

  })
}

/* Input Listener */

const form = document.querySelector("form");
const searchInput = document.querySelector(".header-search");

searchInput.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();

    const apiRequestUrl = `https://api.themoviedb.org/3/search/movie?query=${searchInput.value}&api_key=3fd2be6f0c70a2a598f084ddfb75487c`;

    console.log(searchInput.value)
    if (searchInput.value) {
      getData(apiRequestUrl);
    }
  }
});

/* Clear button */

const xMark = document.querySelector(".xmark");

searchInput.addEventListener("keyup", (event) => {

  if (searchInput.value) {
    xMark.classList.remove('invisible')
  }
});

searchInput.addEventListener("input", (event) => {

  if (searchInput.value === '') {
    xMark.classList.add('invisible')
  }
});

xMark.addEventListener("click", (event) => {
  searchInput.value = ''
  searchInput.placeholder = 'Search'
  xMark.classList.add('invisible')
});