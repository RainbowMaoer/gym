import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'

Vue.config.productionTip = false

import http from './http'
// 这里是把http加在vue的原型上，这样就在任意页面都可以使用axios实例http
Vue.prototype.$http = http

import axios from 'axios'
Vue.prototype.$https = axios.create({
  baseURL: 'http://localhost:3000/web/api'
})

// 全局mixin，全局都可以使用  这个可以理解为一个代码块，让每一个vue实例都拥有这些东西
Vue.mixin({
  computed: {
    uploadUrl() {
      return this.$http.defaults.baseURL + '/upload'
    }
  },
  methods: {
    getAuthHeaders() {
      return {
        Authorization: `Bearer ${sessionStorage.token || ''}`
      }
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
