module.exports = options => {
  const AdminUser = require('../models/AdminUser')
  const assert = require('http-assert')
  // 装一个模块jsonwebtoken  用于做web的token验证
  const jwt = require('jsonwebtoken')
  return async (req, res, next) => {
    // 后端获取请求头用小写，前端用大写 它两会自动对应
    // split分割完之后是数组，然后pop提取最后一个元素
    const token = String(req.headers.authorization || '').split(' ').pop()
    assert(token, 401, '请先登录管理员账号')
    // 获取之后来引用  解密出来  里面有个id就是之前用户登录的那个id，因为最开始生成token就是通过id生成的
    const {id} = jwt.verify(token, req.app.get('secret'))
    assert(id, 401, '请先登录管理员账号')
    req.admin_user = await AdminUser.findById(id)
    assert(req.admin_user, 401, '请先登录管理员账号')
    await next()
  }
}