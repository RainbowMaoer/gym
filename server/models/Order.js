const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username: {
    type: String
  },
  name: {
    type: String
  },
  price: {
    type: String
  },
  picture: {
    type: String
  },
  describe: {
    type: String
  }
})

module.exports = mongoose.model('Order', schema)
