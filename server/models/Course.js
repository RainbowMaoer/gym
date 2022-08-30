const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {
    type: String
  },
  time: {
    type: Array
  },
  coach: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Coach'
  }
})

module.exports = mongoose.model('Course', schema)