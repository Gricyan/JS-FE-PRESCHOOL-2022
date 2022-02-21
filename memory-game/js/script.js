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




const cards = document.querySelectorAll('.card')
let cardOne, cardTwo
let isFalse = false
let matchedCards = 0




function flipCard(event) {
  let clickedCard = event.target

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

function matchCars(img1, img2) {

  if (img1 === img2) {



    matchedCards++
    if (matchedCards == 8) {
      setTimeout(() => {
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

cards.forEach(card => {
  card.addEventListener('click', flipCard)
})







//document.querySelector('.counter').innerHTML = counter