import developers from '../data/devs.json'

function createDeveloperModels(developersList) {
  developersList.forEach(developer => {
    developer.collection = developersList
    developer.doesOpensource = false
    developer.doOpensource = function () {
      this.doOpensource = true
    }
  })

  return developersList
}


const developerModels = createDeveloperModels(developers)
console.log(JSON.stringify(developerModels, null, 2))