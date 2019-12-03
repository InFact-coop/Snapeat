// Custom combinations of ramda functions
import * as R from 'ramda'

const mapIndexed = R.addIndex(R.map)
const reduceIndexed = R.addIndex(R.reduce)

const inspectPipe = label => item => {
  // eslint-disable-next-line
  console.log(label, item)
  return item
}

export default {
  mapIndexed,
  reduceIndexed,
  inspectPipe,
}
