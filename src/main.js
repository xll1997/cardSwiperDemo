import Vue from 'vue'
import App from './App'
import router from './router'

import VueTouch from 'vue-touch' // 移动端页面上加上左右滑动效果

Vue.config.productionTip = false

Vue.use(VueTouch, { name: 'v-touch' })

VueTouch.config.swipe = {
  threshold: 100 //手指左右滑动距离
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
