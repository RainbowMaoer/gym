module.exports = options => {
  return async (req, res, next) => {
    const modelName = require('inflection').classify(req.params.resource)
    // 给请求对象上挂载一个属性Model
    req.Model = require(`../models/${modelName}`)
    next()
  }
}