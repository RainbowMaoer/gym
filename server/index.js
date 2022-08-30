const express = require('express')

const app = express()

// 表示在app实例上设置一个变量  这里设置的值可以随便写，就是一个密钥
// 这个值按道理是需要放在一个环境变量里面的，这里为了方便就直接在这写了
app.set('secret', 'qjge123fg13f1y3f')

// 这个是跨域模块,引用进来直接像匿名函数一样使用
app.use(require('cors')())
// 这个是要像想使用async和await就要写这个
app.use(express.json())
// 表示uploads文件夹下面的文件都是静态文件,这里是静态文件托管
// 这里的意思是,让__dirname + '/uploads'下面的文件可以通过'/uploads' 访问
app.use('/uploads', express.static(__dirname + '/uploads'))

require('./plugins/db')(app)
// 引用过来之后是一个函数，所以要执行它，这样在routes的gym里面就有一个app可以用
require('./routes/gym')(app)
require('./routes/web')(app)

app.listen(3000, () => {
  console.log('http://localhost:3000');
})