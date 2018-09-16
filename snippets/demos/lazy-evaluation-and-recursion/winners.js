/* eslint-disable no-constant-condition */
import developers from '../../data/devs.json'
import { randomIndexInArray, printPerson, runGenerator } from '../../shared'

const winnersGenerator = function *(developersList, amount) {
  const pontentialWinners = [...developersList]

  while (true) {
    if (amount === 0 || !pontentialWinners.length) return

    const winnerIndex = randomIndexInArray(pontentialWinners)
    const [winner] = pontentialWinners.splice(winnerIndex, 1)

    yield winner

    amount--
  }
}

const devsWinnerGenerator = winnersGenerator(developers, 3)

console.log('The first winner is', printPerson(devsWinnerGenerator.next().value))

setTimeout(() => {
  console.log('The second winner is', printPerson(devsWinnerGenerator.next().value))
}, 2000)

setTimeout(() => {
  console.log('The third winner is', printPerson(devsWinnerGenerator.next().value))
}, 4000)
