const eRocket = func => {
  if (typeof func !== 'function') {
    console.error('exceptionRocket: invalid function')
    return
  }

  console.error('exception:' + func.name + ': ' + func.toString())
}

module.exports = eRocket
