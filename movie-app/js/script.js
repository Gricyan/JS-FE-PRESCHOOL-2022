const requestUrl = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=spring&page=1'

// GET method ---------------------------------------

function sendRequest(method, url) {

  return fetch(url).then(response => {
    //return response.text()
    return response.json()
  })

}

sendRequest('GET', requestUrl)
  .then(data => console.log(data))
  .catch(err => console.error(err))