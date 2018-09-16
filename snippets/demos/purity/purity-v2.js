import developers from '../data/devs.json'

function createDeveloperModels(developersList) {
  return developersList.map(developer => {
    // create a new object leaving the developer data untouched
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

const developerModels = createDeveloperModels(developers)
console.log(JSON.stringify(developerModels, null, 2))