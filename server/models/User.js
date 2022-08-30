const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  username: {
    type: String
  },
  password: {
    type: String,
    // 这个是让密码在编辑页面不会被查出来
    select: false,
    // set就是把这个密码改一下再保存，这里是把密码散列一下再保存  接收的就是填的那个密码
    // 这里安装bcrypt用于做密码的散列
    set(val) {
      // 第一个参数就是散列后的值，第二个参数是散列的指数，数值越大散列的越复杂，但是越耗时，一般在10~12
      return require('bcrypt').hashSync(val, 10)
    }
  },
  phone: {
    type: String
  },
  email: {
    type: String
  },
  roles: {
    type: String
  },
  avatar: {
    type: String
  }
})

module.exports = mongoose.model('User', schema)
