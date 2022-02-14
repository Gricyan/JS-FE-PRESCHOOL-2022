const requestUrl = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=spring&page=1'

// GET method ---------------------------------------

function sendRequest(method, url) {

  return fetch(url).then(response => {
    //return response.text()
    return response.json()
  })

}

sendRequest('GET', requestUrl)
  .then((data) => {



    console.log(data)

    for (let i = 0; i < 15; i++) {

      if (data.results[i].backdrop_path === null) {
        continue;
      } else {

        const divItemElement = document.createElement("div");
        divItemElement.classList.add("movie-item");

        const imgPoster = document.createElement("img");
        imgPoster.src = `https://www.themoviedb.org/t/p/w440_and_h660_face${data.results[i].poster_path}`

        const divMovieInfo = document.createElement("div");
        divMovieInfo.classList.add("movie-info");
        const movieHeader = document.createElement("h2");
        const movieHeaderName = document.createTextNode(data.results[i].title);
        const movieRate = document.createElement("span");
        const movieRateNum = document.createTextNode(data.results[i].vote_average);

        const divMovieOverview = document.createElement("div");
        divMovieOverview.classList.add("movie-overview");
        const movieOverviewText = document.createTextNode(data.results[i].overview);

        divItemElement.append(imgPoster);
        divItemElement.append(divMovieInfo);
        divMovieInfo.append(movieHeader);
        movieHeader.append(movieHeaderName);
        divMovieInfo.append(movieRate);
        movieRate.append(movieRateNum);
        divItemElement.append(divMovieOverview);
        divMovieOverview.innerHTML = "<h3>Overview</h3>";
        divMovieOverview.append(movieOverviewText);

        document.querySelector(".movies").append(divItemElement);

      };

    }
  })
  .catch(err => console.error(err))