import developers from '../data/devs.json'

function createDevelopersModels(developersList) {
  return developersList.map(developer => {
    return {
      ...developer,
      doesOpensource: false,
      collection: developersList,
      doOpensource() {
        this.doOpensource = true
      }
    }
  })
}

const developerModels = createDevelopersModels(developers)
console.log(JSON.stringify(developerModels, null, 2))