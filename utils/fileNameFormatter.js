const fileNameFormatter = name =>
  name.replace(/[^a-z0-9_.]/gi, '_').toLowerCase()

export default fileNameFormatter
