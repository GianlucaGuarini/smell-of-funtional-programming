export function randomIndexInArray(array) {
  return Math.floor(Math.random() * array.length)
}

export function sleep(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay)
  })
}

export function take(amount, generator) {
  const result = []
  const gen = generator.next ? generator : generator()
  let i = 0

  return (function run() {
    let { value, done } = gen.next()

    if (done || i >= amount) {
      gen.return(result)
      return result
    }

    result.push(value)
    i ++

    return run()
  })()
}

export function capitalize(string) {
  const [firstLetter, ...rest] = string
  return `${firstLetter.toUpperCase()}${rest.join('')}`
}

export function printPerson({ first_name, last_name, city }) {
  return `🎉 ${capitalize(first_name)} ${capitalize(last_name)} from ${city} 🎉`
}

export function printWinner(message, generatorResult) {
  console.log(message, printPerson(generatorResult.value))
}

export function printJSON(json) {
  console.dir(json, {depth: null, colors: true})
}

export function printInfo(message) {
  console.log('------------------------------------------------------------')
  console.log('\x1b[36m%s\x1b[39m', message)
  console.log('------------------------------------------------------------')
}
