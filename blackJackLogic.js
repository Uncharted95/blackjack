export function getRandomCardFromNumber(randomNumber) {
  if (randomNumber === 1) return 1
  if (randomNumber === 11) return 11
  if (randomNumber > 10) return 10
  return randomNumber
}

export function evaluateSum(sum) {
  if (sum <= 20) {
    return { message: "Do you want to draw a new card?", isAlive: true, hasBlackJack: false }
  }
  if (sum === 21) {
    return { message: "You got blackjack!", isAlive: true, hasBlackJack: true }
  }
  return { message: "You're out of the game!", isAlive: false, hasBlackJack: false }
}
