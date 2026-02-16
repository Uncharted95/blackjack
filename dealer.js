let cardsD = []
let sumD = 0
let cardsElD = document.getElementById("cards-eld")
let sumElD = document.getElementById("sum-eld")

function determineAceD(){
    while (sumD > 21 && cardsD.includes(11)) {
        let aceIndex = cardsD.indexOf(11)
        cardsD[aceIndex] = 1
        sumD -= 10
    }
}

function renderGameD(){
    cardsElD.textContent = `Dealer's cards: `

    if (hasStood === false) {
        cardsElD.textContent += cardsD[0] + " ?"
        sumElD.textContent = `Dealer's sum: ?`
        return
    }

    while (isDealerAlive === true && hasDealerBlackJack === false && sumD < 17) {
        let cardD = getRandomCard()
        cardsD.push(cardD)
        sumD += cardD
        determineAceD()
    }


    hasDealerBlackJack = (sumD === 21)
    isDealerAlive = (sumD <= 21)

    for (let i = 0; i < cardsD.length; i++){
        cardsElD.textContent += cardsD[i] + " "
    }
    sumElD.textContent = `Dealer's sum: ${sumD}`
}


function newCardD(){
    if (hasStood === true && isDealerAlive === true && hasDealerBlackJack === false && sumD < 17){
        let cardD = getRandomCard()
        cardsD.push(cardD)
        sumD += cardD
        determineAceD()
        renderGameD()
    }
}
