import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as echarts from 'echarts'
import './utils/mixins'
import dataV from '@jiaminghi/data-view'
Vue.use(dataV)

import '@/assets/icons/iconfont.css'
import '@/assets/styles/reset.css'


Vue.config.productionTip = false
Vue.prototype.$echarts = echarts

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
