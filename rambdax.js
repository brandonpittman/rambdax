const R = require('rambda')

const isType = require('./modules/isType')
function nox(x){
  if(R.type(x) === 'Function'){
    return inputHolder => !x(inputHolder)
  }
  console.log('else',x)
  return !x
}

exports.nox = nox
exports.compact = require('./modules/compact')
exports.composeAsync = require('./modules/composeAsync')
exports.intersection = require('./modules/intersection')
exports.isValid = require('./modules/isValid')
exports.ifElseAsync = require('./modules/ifElseAsync')
exports.DELAY = 'RAMBDAX_DELAY'
exports.delay = require('./modules/delay')
exports.evolve = require('./modules/evolve')
exports.mapAsync = require('./modules/mapAsync')
exports.mapFastAsync = require('./modules/mapFastAsync')
exports.memoize = require('./modules/memoize')
exports.mergeAll = require('./modules/mergeAll')
exports.omitBy = require('./modules/omitBy')
exports.once = require('./modules/once')
exports.pickBy = require('./modules/pickBy')
exports.produce = require('./modules/produce')
exports.shuffle = require('./modules/shuffle')
exports.throttle = require('./modules/throttle')
exports.debounce = require('./modules/debounce')
exports.isType = isType
exports.isString = x => isType('String', x)
exports.isString = x => isType('Array', x)
exports.isObject = x => isType('Object', x)
exports.isNil = x => isType('Undefined', x)||isType('Null', x)
exports.isPromiseLike = require('./modules/isPromiseLike')
exports.race = require('./modules/race')
exports.isString = require('./modules/race')
exports.random = require('./modules/random')
exports.rangeBy = require('./modules/rangeBy')
exports.renameProps = require('./modules/renameProps')
exports.resolve = require('./modules/resolve')
exports.resolveSecure = require('./modules/resolveSecure')
exports.tap = require('./modules/tap')
exports.tapAsync = require('./modules/tapAsync')
exports.where = require('./modules/where')
exports.wrap = require('./modules/wrap')

Object.keys(R).map(method => {
  exports[ method ] = R[ method ]
})
