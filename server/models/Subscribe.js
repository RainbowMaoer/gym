const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: {
    type: String
  },
  time: {
    type: Array
  },
  coach: {
    name: {
      type: String
    },
    sex: {
      type: String
    },
    phone: {
      type: String
    },
    email: {
      type: String
    },
    avatar: {
      type: String
    },
    specialty: {
      type: String
    }
  }
})

module.exports = mongoose.model('Subscribe', schema)``