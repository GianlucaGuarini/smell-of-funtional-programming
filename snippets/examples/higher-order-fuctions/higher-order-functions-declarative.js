import developers from '../../data/devs.json'
import { printJSON, printInfo } from '../../shared'

const isFromZuerich = ({city}) => city === 'Zuerich'
const zuerichDevs = developers.filter(isFromZuerich)

printInfo('Devs from Zürich')
printJSON(zuerichDevs)