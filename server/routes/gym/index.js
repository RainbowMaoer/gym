module.exports = app => {
  const express = require('express')
  const User = require('../../models/User')
  const AdminUser = require('../../models/AdminUser')

  const assert = require('http-assert')
  // 装一个模块jsonwebtoken  用于做web的token验证
  const jwt = require('jsonwebtoken')
  // 这个是express的一个子路由，我们需要的时候就用它，里面放各种增删改查的接口，最后再把这个子路由挂载到app.use上
  const router = express.Router({
    mergeParams: true
  })

  // 增加数据的接口
  router.post('/', async (req, res) => {
    // 这里是接受客户端发过来的数据,然后存储在模型,也就是数据库的表里面,然后返回给客户端
    const model = await req.Model.create(req.body)
    res.send(model)
  })

  // 这个是更改的接口,也就是编辑的接口
  router.put('/:id', async (req, res) => {
    const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
    res.send(model)
  })

  // 删除的接口
  router.delete('/:id', async (req, res) => {
    // 这里删完之后不需要获取返回值
    await req.Model.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })

  // 查看数据的接口,这里是把客户端发送过来的数据显示出来
  router.get('/', async (req, res) => {
    const queryOptions = {}
    if (req.Model.modelName === 'Course') {
      queryOptions.populate = 'coach'
    }
    // 这里limit是限制显示数据在20条以内
    const items = await req.Model.find().setOptions(queryOptions).limit(100)
    res.send(items)
  })

  // 这个也是获取数据的接口,这个是点了编辑之后把那一行的数据获取过来
  router.get('/:id', async (req, res) => {
    // 这里limit是限制显示数据在20条以内
    const model = await req.Model.findById(req.params.id)
    res.send(model)
  })

  // 引入中间件
  const authMiddleware = require('../../middleware/auth')
  const resourceMiddleware = require('../../middleware/resource')

  app.use('/gym/api/rest/:resource', authMiddleware(), resourceMiddleware(), router)

  // 图片上传的接口
  const multer = require('multer')
  const upload = multer({
    dest: __dirname + '/../../uploads'
  })
  app.use('/gym/api/upload', authMiddleware(), upload.single('file'), async (req, res) => {
    const file = req.file
    file.url = `http://localhost:3000/uploads/${file.filename}`
    res.send(file)
  })

  // 登录接口
  app.post('/gym/api/login', async (req, res) => {
    // 解构赋值，把前端登录页的用户名密码解构出来
    const {
      username,
      roles,
      password
    } = req.body
    // 1、根据用户名找用户  这里只能通过用户名找，因为密码已经被散列了，找不到的
    // 取的时候顺便把密码取过来，后面要用，因为后面直接拿是拿不到的，因为设置了select为false

    const admin_user = await AdminUser.findOne({
      username
    }).select('+password')

    const user = await User.findOne({
      username
    }).select('+password')

    if (roles === 'admin') {
      // assert要配合最后面的错误处理函数一起用
      assert(admin_user, 422, '用户不存在')
    } else {
      assert(user, 422, '用户不存在')
    }

    // 2、校验密码
    // 比较明文和密文是否匹配  第一个参数是提交过来的密码，第二个参数是数据库的密码
    if (roles === 'admin') {
      const isValid = require('bcrypt').compareSync(password, admin_user.password)
      assert(isValid, 422, '密码错误')
    } else {
      const isValid = require('bcrypt').compareSync(password, user.password)
      assert(isValid, 422, '密码错误')
    }

    // 3、返回token
    // 用jwt的sign方法生成token
    if (roles === 'admin') {
      const token = jwt.sign({
        id: admin_user._id
      }, app.get('secret'))
      res.send({
        token,
        roles,
        username
      })
    } else {
      const token = jwt.sign({
        id: user._id
      }, app.get('secret'))
      res.send({
        token,
        roles,
        username
      })
    }
  })

  // 错误处理函数
  app.use(async (err, req, res, next) => {
    res.status(err.statusCode || 500).send({
      message: err.message
    })
  })

  app.get('/gym/api/profile', async (req, res) => {
    const token = String(req.headers.authorization || '').split(' ').pop()
    const { id } = jwt.verify(token, req.app.get("secret"));
    const model = await AdminUser.findById(id)
    res.send(model)
  })

}