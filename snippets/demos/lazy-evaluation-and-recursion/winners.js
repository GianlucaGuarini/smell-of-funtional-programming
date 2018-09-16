/* eslint-disable no-constant-condition */
import developers from '../../data/devs.json'
import { randomIndexInArray, printWinner, runGenerator, sleep } from '../../shared'

const winnersGenerator = function *(developersList, amount) {
  const pontentialWinners = [...developersList]

  while (true) {
    if (amount === 0) return

    const winnerIndex = randomIndexInArray(pontentialWinners)
    const [winner] = pontentialWinners.splice(winnerIndex, 1)

    yield winner

    amount--
  }
}

;(async function main() {
  const devsWinnerGenerator = winnersGenerator(developers, 3)

  printWinner('The first winner is', devsWinnerGenerator.next())
  await sleep(2000)
  printWinner('The second winner is', devsWinnerGenerator.next())
  await sleep(2000)
  printWinner('..and finally the last winner is', devsWinnerGenerator.next())
})()