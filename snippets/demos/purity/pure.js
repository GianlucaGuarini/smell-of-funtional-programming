import developers from '../../data/devs.json'

const DEVELOPER_MODEL = Object.freeze({
  doesOpensource: false,
  doOpensource() {
    this.doOpensource = true
  },
  collection: []
})

function createDevelopersModels(developersList) {
  return developersList.map(developer => {
    return {
      ...developer,
      ...DEVELOPER_MODEL,
      collection: developersList
    }
  })
}

const developerModels = createDevelopersModels(developers)
console.log(JSON.stringify(developerModels, null, 2))