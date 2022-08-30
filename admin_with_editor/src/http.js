import axios from 'axios'
import Vue from 'vue'
import router from './router'

const http = axios.create({
  baseURL: 'http://localhost:3000/gym/api'
})

// 加一个请求头 Authorization 这是个标准的请求头，如果有什么授权信息的时候可以用这个来传  Bearer是行业规范  表示类型
http.interceptors.request.use(function (config) {
  // Do something before request is sent
  if (sessionStorage.token) {
    config.headers.Authorization = 'Bearer ' + sessionStorage.token
  }
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// http.interceptors.request.use(function (config) {
//   // Do something before request is sent
//   if (sessionStorage.token) {
//     config.headers.Authorization = 'Bearer ' + sessionStorage.token
//   }
//   return config;
// }, function (error) {
//   // Do something with request error
//   return Promise.reject(error);
// });


// 全局捕获异常信息  这是给整个http请求加一个拦截器
http.interceptors.response.use(res => {
  return res
}, err => {
  // 写严谨一点，有这个错误信息的时候才弹出
  if (err.response.data.message) {
    // 弹出整个错误信息
    Vue.prototype.$message({
      type: 'error',
      message: err.response.data.message
    })
    if (err.response.status === 401) {
      router.push('/login')
    }
  }
  return Promise.reject(err)
})

export default http