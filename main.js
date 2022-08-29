// when start button on screen one is clicked, screen2 is displayed
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const screen3 = document.querySelector(".screen3")
const screen4 = document.querySelector(".screen4")
const door = document.querySelector(".img-door")
const audio = document.querySelector(".friends-audio")
const resetL = document.querySelector(".reset-button-lose")
const resetW = document.querySelector('.reset-button-win')

// Timer Logic
const minutes = document.querySelector('.timer-min')
const seconds = document.querySelector('.timer-seconds')
const startBtn = document.querySelector('.start')

this.el = {
    minutes, seconds
}

this.interval = null
this.remainingSeconds = 40

this.updateInterface()

// start button click
startBtn.addEventListener('click', () => {

     if (this.interval === null) {
        this.startTimer()
        createBoard()
    } else {
        this.stopTimer()
    } 
})
   

function updateInterface() {
    const minutes = Math.floor(this.remainingSeconds / 60)
    const seconds = this.remainingSeconds % 60
    // makes the timer have 2 values (00 or 01) at all times
    this.el.minutes.innerText = minutes.toString().padStart(2, "0")
    this.el.seconds.innerText = seconds.toString().padStart(2, "0")
}
function startTimer() {

    if (this.remainingSeconds === 0) return

    this.interval = setInterval(() => {
        this.remainingSeconds--
        this.updateInterface()

        if (this.remainingSeconds === 0) {
            this.stopTimer()
        }

    }, 1000)
}
// if timer goes to 0 display (timesup + winner/looser) screen
function stopTimer() {

        clearInterval(this.interval)
        this.interval = null
        this.updateInterface()
        if (remainingSeconds === 0 && cardsWon.length < (cardArray.length/2)) {
            screen2.setAttribute("style", `display: none`)
            screen3.setAttribute("style", `display: flex`)
        }
        if (remainingSeconds === 0 && cardsWon.length == (cardArray.length/2)) {
            screen2.setAttribute("style", `display: none`)
            screen4.setAttribute("style", `display: flex`)
        }
        audio.pause()

}
// SWITCH SCREENS logic
function switchScreens () {
    screen1.setAttribute("style", `display: none`)
    screen2.setAttribute("style", `display: flex`)
    audio.play()
}
displayScreens()

function displayScreens () {
    door.addEventListener("click", switchScreens)
}

// Board Game logic
const cardArray = [
    {
        name: 'monica',
        img: './img/Frame 1.png'
    },
    {
        name:'chandler',
        img:'./img/Frame 2.png'
    },
    {
        name:'rachel',
        img:'./img/Frame 3.png'
    },
    {
        name:'joey',
        img:'./img/Frame 4.png'
    },
    {
        name:'phoebe',
        img:'./img/Frame 6.png'
    },
    {
        name:'ross',
        img:'./img/Slice 3.png'
    },
    {
        name:'janice',
        img:'./img/Slice 2.png'
    },
    {
        name: 'monica',
        img: './img/Frame 1.png'
    },
    {
        name:'chandler',
        img:'./img/Frame 2.png'
    },
    {
        name:'rachel',
        img:'./img/Frame 3.png'
    },
    {
        name:'joey',
        img:'./img/Frame 4.png'
    },
    {
        name:'phoebe',
        img:'./img/Frame 6.png'
    },
    {
        name:'ross',
        img:'./img/Slice 3.png'
    },
    {
        name:'janice',
        img:'./img/Slice 2.png'
    }

]
// sort the card every time page is refreshed
cardArray.sort(() => 0.5 - Math.random())

// referencing the html document (div) I want to append my pictures at
let gridDisplay = document.querySelector('#grid')
let cardsChosen = []
let cardsChosenIds = []
let cardsWon = []
let score = document.querySelector('#result')


// create card board and all make the cards imgs appear
function createBoard () {
    for (let i = 0; i < cardArray.length; i++) {
        let card = document.createElement('img')
        card.setAttribute('src', './img/backcard.png')
        card.setAttribute('class', 'cards-element')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.append(card)
        
    }
}
// checkMatch()

function checkMatch() {

    const cards = document.querySelectorAll('#grid img')
    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    if (optionOneId === optionTwoId) {

        cards[optionOneId].setAttribute('src', './img/backcard.png')
        cards[optionTwoId].setAttribute('src', './img/backcard.png')

    }
    if (cardsChosen[0] == cardsChosen[1]) {
        // play sound from the matching cards
        cards[optionOneId].setAttribute('src', './img/blank.png')
        cards[optionTwoId].setAttribute('src', './img/blank.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)  
        cardsWon.push(cardsChosen)      
    } else {
        cards[optionOneId].setAttribute('src', './img/backcard.png')
        cards[optionTwoId].setAttribute('src', './img/backcard.png')
    }

    score.innerText = cardsWon.length
    cardsChosen = []
    cardsChosenIds = []

}

// flip cars when clicked, switching images from backcard to their front
function flipCard() {
    // this is letting us interect with any element we click on
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src',cardArray[cardId].img)
    //logic to only display 2 cards at the time then check for a match
    if (cardsChosen.length == 2) {
        setTimeout(checkMatch, 500)
    }
}

function resetGame() {
    screen4.setAttribute("style", `display: none`)
    screen3.setAttribute("style", `display: none`)
    screen1.setAttribute("style", `display: flex`)
    cardsWon = []
    score.innerText = ""
    gridDisplay.innerHTML = ""
    this.interval = null
} 

// reset button
resetL.addEventListener("click", resetGame)
resetW.addEventListener("click", resetGame)

