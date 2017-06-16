import Vue from 'vue'
import App from './App'
import 'babel-polyfill' // 结合transform-runtime，合理降级es6方法和api
import loading from 'common/image/logo@2x.png'
import fastclick from 'fastclick'
import router from './router/index'
import VueLazyLoad from 'vue-lazyload'

import 'common/stylus/index.styl'

fastclick.attach(document.body)
Vue.use(VueLazyLoad, {
  loading
})

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
