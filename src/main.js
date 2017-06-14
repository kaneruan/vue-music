import Vue from 'vue'
import App from './App'
import 'babel-polyfill'
import fastclick from 'fastclick'

import 'common/stylus/index.styl'

fastclick.attach(document.body)
new Vue({
  el: '#app',
  render: h => h(App)
})
