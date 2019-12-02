import * as R from 'ramda'

export default int => R.pipe(parseInt, length => [...Array(length)])(int)
