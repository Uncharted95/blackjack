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

//This is where the game begins. When you click the start b8tton, the startGame() function fires up. This changes the variables of the player to alive as well as the dealer. 


function startGame(){ 
    isAlive = true
    hasBlackJack = false
    isDealerAlive = true
    hasDealerBlackJack = false
    let firstCard = getRandomCard() //The first two cards get generated in the getRandomCard() function further down.
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    let firstCardD = getRandomCard()
    let secondCardD = getRandomCard()
    cardsD = [firstCardD, secondCardD]
    sumD = firstCardD + secondCardD
    determineAce()
    renderGame() //When startGame() gets initialized, both renderGame() functions for both the user an dealer function.
    renderGameD()
}

//This function determines which card that the user will receive. The built in Math.random function spits out a value between 0 and 1.   
// Math.floor rounds the decimal to the closest roundest number. Multiplying it with 13 bring the value upwards toward 12. 
// Adding +1 to the line of code raises the minimum value. 
function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1 
    if(randomNumber === 1){
        return 11
    }else if(randomNumber > 10){
        return 10
    } else {
        return randomNumber
    }
}

function determineAce(){
    while (sum > 21 && cards.includes(11)){
       let aceIndex = cards.indexOf(11)
       cards[aceIndex] = 1
        sum -= 10
    }

}

//This function is where the Dom manipulation happens, where the changes get reflected in the browser. 
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

    if (sum > 21 && sumD <= 21){
        message = "Seems like you busted"
    } else if(sumD > 21 && sum <= 21){
        message = "Seems like I busted"
    } else if (sum > 21 && sumD > 21){
        message = "We both busted"
    }
    else if(sum > sumD) {
        message = "You won!"
    } else if(sumD > sum){
        message = "I won!"
    } else{
        message = "Seems like it's a tie!"
    }
    messageEl.textContent = `Dealer: ${message} `

}


//This ends the game. 
function stand(){
    isAlive = false
}

//This function adds a new card to your hand. 
function newCard(){
    if(isAlive === true && hasBlackJack === false){
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }

}

