/* Create cards list */

const cardsList = document.querySelector('.cards')
const imagesArray = [11, 12, 21, 22, 31, 32, 41, 42, 51, 52, 61, 62, 71, 72, 81, 82]

imagesArray.forEach((imageNum) => {

  const cardsItem = document.createElement("li");
  cardsItem.classList.add("card");
  cardsItem.innerHTML = `
    <div class="view front-view"></div>
    <div class="view back-view">
      <img src="assets/img/img-${imageNum}.jpg" alt="card-image">
    </div>
      `
  cardsList.appendChild(cardsItem);
})

/* Flipping cards and count moves*/

const cards = document.querySelectorAll('.card')
const movesShow = document.querySelector('.counter')

let cardOne, cardTwo
let isFalse = false
let matchedCards = 0
let counter = 1

function countMoves() {
  movesShow.innerHTML = counter++
}

function flipCard(event) {
  let clickedCard = event.target

  countMoves()

  if (clickedCard !== cardOne && !isFalse) {
    clickedCard.classList.add('flip')

    if (!cardOne) {
      return cardOne = clickedCard
    }

    cardTwo = clickedCard
    isFalse = true

    let cardOneImg = cardOne.querySelector('img').src.slice(0, -5)
    let cardTwoImg = cardTwo.querySelector('img').src.slice(0, -5)

    matchCars(cardOneImg, cardTwoImg)
  }
}

/* Match cards */

const showScoreDiv = document.querySelector('.show-score-container')
const showGameScore = document.querySelector('.game-score')

function matchCars(img1, img2) {

  if (img1 === img2) {

    matchedCards++
    if (matchedCards == 8) {

      updateScore(counter)
      showResult(counter)

      setTimeout(() => {
        movesShow.innerHTML = 0
        counter = 1
        return shuffleCard()
      }, 1200)
    }

    cardOne.removeEventListener('click', flipCard)
    cardTwo.removeEventListener('click', flipCard)

    setTimeout(() => {
      cardOne.classList.add('match')
      cardTwo.classList.add('match')
      cardOne = cardTwo = ''
    }, 400)

    isFalse = false

    return
  } else {
    setTimeout(() => {
      cardOne.classList.add('vibration')
      cardTwo.classList.add('vibration')
    }, 400)
    setTimeout(() => {
      cardOne.classList.remove('vibration', 'flip')
      cardTwo.classList.remove('vibration', 'flip')
      cardOne = cardTwo = ''
      isFalse = false
    }, 1200)

    return
  }
}

/* Shuffle cards for new games */

function shuffleCard() {
  matchedCards = 0
  cardOne = cardTwo = ''

  let unShuffledImages = [11, 12, 21, 22, 31, 32, 41, 42, 51, 52, 61, 62, 71, 72, 81, 82]
  let shuffledImages = unShuffledImages
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

  cards.forEach((card, index) => {
    card.classList.remove('flip')
    card.addEventListener('click', flipCard)

    let images = card.querySelector('img')
    images.src = `assets/img/img-${shuffledImages[index]}.jpg`
  })
}

shuffleCard()

/* Cards click */

cards.forEach(card => {
  card.addEventListener('click', flipCard)
})

/* Score */

const usersScore = {
  name: '',
  moves: []
}

const userNameShow = document.querySelector('.user-name')
const button = document.querySelector('.btn');
const entranceScreen = document.querySelector('.entrance');

function createUser() {
  button.onclick = (event) => {

    event.preventDefault();
    let userName = document.getElementById('userNameInput').value

    if (userName != null) {
      userNameShow.innerHTML = userName
    }

    usersScore.name = userName

    entranceScreen.classList.add('hide')
    setTimeout(() => {
      entranceScreen.style.display = 'none'
    }, 500)

  }
}

createUser()

function updateScore(counter) {
  usersScore.moves.push(counter)
  let minScore = Math.min.apply(Math, usersScore.moves)

  let bestResultShow = document.querySelector('.best-result')
  bestResultShow.innerHTML = minScore

  localStorage.setItem(usersScore.name, usersScore.moves)

  setTimeout(() => {
    localStorage.setItem('Best result', minScore)
  }, 500)
}

function getLocalStorage() {

  if (localStorage.getItem('Best result')) {
    let minGameScore = localStorage.getItem('Best result')

    updateScore(minGameScore)

  }
}
window.addEventListener('load', getLocalStorage)

/* Show game score */

const tryAgainBtn = document.querySelector('.try-again-btn')

function showResult(counter) {

  let minGameScore = localStorage.getItem('Best result')

  let resume = ''

  if (!minGameScore) {
    resume = 'it was just a first attempt, try more'
  } else if (counter < minGameScore) {
    resume = 'it\'s a new record!'
  } else if (counter > minGameScore) {
    resume = 'try harder!'
  } else {
    resume = 'try a bit more faster'
  }

  showGameScore.innerHTML = `
  <p>You\'ve made ${counter} moves,</p>
  <p>${resume}</p>`

  showScoreDiv.classList.add('show')
  showGameScore.classList.add('show')

  tryAgainBtn.addEventListener('click', () => {
    showScoreDiv.classList.remove('show')
    showGameScore.classList.remove('show')
  })
}