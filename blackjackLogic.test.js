import { describe, it, expect } from 'vitest'
import { getRandomCardFromNumber, evaluateSum } from './blackJackLogic'

describe('getRandomCardFromNumber', () => { //Groups what we are testing
  it('turns Ace into 11', () => { // Defines a single test 
    expect(getRandomCardFromNumber(11)).toBe(11) // Checks if something is true
  })

  it('turns face cards into 10', () => {
    expect(getRandomCardFromNumber(12)).toBe(10)
  })

  it('keeps normal cards as-is', () => {
    expect(getRandomCardFromNumber(7)).toBe(7)
  })
})

describe('evaluateSum', () => {
  it('asks to draw when sum <= 20', () => {
    const result = evaluateSum(18)
    expect(result.message).toBe("Do you want to draw a new card?")
    expect(result.isAlive).toBe(true)
  })

  it('detects blackjack', () => {
    const result = evaluateSum(21)
    expect(result.hasBlackJack).toBe(true)
  })

  it('ends game when sum > 21', () => {
    const result = evaluateSum(22)
    expect(result.isAlive).toBe(false)
  })
})
