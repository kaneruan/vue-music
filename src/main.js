import Vue from 'vue'
import App from './App'
import 'babel-polyfill'
import fastclick from 'fastclick'
import router from './router/index'

import 'common/stylus/index.styl'

fastclick.attach(document.body)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
