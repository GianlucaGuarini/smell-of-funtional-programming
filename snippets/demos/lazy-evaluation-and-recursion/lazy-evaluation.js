/* eslint-disable no-constant-condition */
import { take, printInfo, printJSON } from '../../shared'
import curry from 'curri'

const oddNumbersGenerator = function *(start = 0) {
  while (true) {
    start++
    if (start % 2 === 0) continue
    yield start
  }
}

const numbersGenrator = function* (value = 0) {
  while (true) yield value
}

const zeros = curry(numbersGenrator)(0)
const ones = curry(numbersGenrator)(1)

const TEN = 10
const TWENTY = 20

printInfo(`Give me ${TEN} odd numbers`)
printJSON(take(TEN, oddNumbersGenerator))
printInfo(`Give me ${TWENTY} zeros`)
printJSON(take(TWENTY, zeros))
printInfo(`Give me ${TWENTY} ones`)
printJSON(take(TWENTY, ones))
