import developers from '../data/devs.json'
import { printJSON, printInfo } from '../shared'

// add a developer to the collection
function addDeveloper(developersList, developer) {
  developersList.push(developer)
}

// function relying on global variables
function getDevsFromZurich() {
  // create the return value
  var developersList = []

  // loop all the developers
  for (var i = 0; i < developers.length; i++) {
    var developer = developers[i]

    // check if the current developer in the loop is from Zürich
    if (developer.city === 'Zuerich') {
      // populate the return result
      addDeveloper(developersList, developer)
    }
  }

  return developersList
}

printInfo('Devs from Zürich')
printJSON(getDevsFromZurich())