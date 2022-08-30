const Subscribe = require('../../models/Subscribe')

module.exports = app => {
  const router = require('express').Router()
  const mongoose = require('mongoose')
  const Equipment = mongoose.model('Equipment')
  const Order = mongoose.model('Order')
  const Course = mongoose.model('Course')
  const Subscribe = mongoose.model('Subscribe')
  // 普通用户的接口
  // 商品列表接口
  router.get('/kits/list', async (req, res) => {
    const kits = await Equipment.find().limit(100).lean()
    res.send(kits)
  })

  // 增加订单的接口
  router.post('/orders', async (req, res) => {
    // console.log(req);
    const model = await Order.create(req.body)
    // console.log(model);
    res.send(req.body)
  })

  // 获取订单数据的接口
  router.get('/orders', async (req, res) => {
    const items = await Order.find().limit(100)
    // console.log(items);
    res.send(items)
  })

  // 删除订单的接口
  router.delete('/orders/:id', async (req, res) => {
    // 这里删完之后不需要获取返回值
    await Order.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })

  // 获取课程列表的接口
  router.get('/curriculums/list', async (req, res) => {
    const model = await Course.find().populate('coach').limit(100).lean()
    res.send(model)
  })

  // 增加预约的接口
  router.post('/subscribe', async (req, res) => {
    const model = await Subscribe.create(req.body)
    res.send(model)
  })

  // 获取预约列表的接口
  router.get('/subscribe', async (req, res) => {
    // 这里limit是限制数据在100条
    const items = await Subscribe.find().limit(100)
    res.send(items)
  })

  // 删除预约的接口
  router.delete('/subscribe/:id', async (req, res) => {
    // 这里删完之后不需要获取返回值
    await Subscribe.findByIdAndDelete(req.params.id, req.body)
    res.send({
      success: true
    })
  })
  app.use('/web/api', router)
}