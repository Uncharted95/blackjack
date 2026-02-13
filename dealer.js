let cardsD = []
let sumD = 0
let cardsElD = document.getElementById("cards-eld")
let sumElD = document.getElementById("sum-eld")

function renderGameD(){
    cardsElD.textContent = `Dealer's cards: `

    for (let i = 0; i < cardsD.length; i++){
        cardsElD.textContent += cardsD[i] + " "
    }

    if(sumD <= 16){
        newCardD()
    } else if(sumD === 21){
        hasDealerBlackJack = true
        isAlive = false
        message = "I got Blackjack."
    } else if(sumD > 21){
        isDealerAlive = false
        isAlive = false
        message = "I lost!"
    }

    sumElD.textContent = `Dealer's sum: ${sumD}`
    messageEl.textContent = `Dealer: ${message} ` 

}


function newCardD(){
    if(isDealerAlive === true && hasDealerBlackJack === false){
        let cardD = getRandomCard()
        sumD += cardD
        cardsD.push(cardD)
        renderGameD()
    }


}