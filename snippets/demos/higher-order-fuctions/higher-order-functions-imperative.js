import developers from '../data/devs.json'
import { printJSON, printInfo } from '../shared'

function getDevsFromZurich() {
  var developersList = []

  for (var i = 0; i < developers.length; i++) {
    var developer = developers[i]

    if (developer.city === 'Zuerich') {
      developersList.push(developer)
    }
  }

  return developersList
}

printInfo('Devs from Zürich')
printJSON(getDevsFromZurich())