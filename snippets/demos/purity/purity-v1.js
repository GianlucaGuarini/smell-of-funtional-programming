import developers from '../../data/devs.json'

function createDevelopersModels(developersList) {
  developersList.forEach(developer => {
    developer.collection = developersList
    developer.doesOpensource = false
    developer.doOpensource = function () {
      this.doOpensource = true
    }
  })

  return developersList
}


const developerModels = createDevelopersModels(developers)
console.log(JSON.stringify(developerModels, null, 2))