let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let isDealerAlive = false
let hasDealerBlackJack = false
let message = ""
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")

//This is where the game begins. When you click the start b8tton, the startGame() function fires up. This changes the variables of the pl

function startGame(){ 
    isAlive = true
    hasBlackJack = false
    isDealerAlive = true
    hasDealerBlackJack = false
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    let firstCardD = getRandomCard()
    let secondCardD = getRandomCard()
    cardsD = [firstCardD, secondCardD]
    sumD = firstCardD + secondCardD
    renderGame()
    renderGameD()
}


function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if(randomNumber === 1){
        return 11
    } else if(randomNumber === 11){
        return 1
    }else if(randomNumber > 10){
        return 10
    } else {
        return randomNumber
    }
}

function renderGame(){
    cardsEl.textContent = `Your cards: `

    for (let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = `Your sum: ${sum}`
    if(sum <= 20){
        message = "Do you want to draw a new card?"
    } else if(sum === 21){
        message = "You got blackjack!"
        hasBlackJack = true
    } else {
        message = "You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = `Dealer: ${message} `
}



function stand(){
    isAlive = false
}


function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }

}

