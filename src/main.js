import Vue from 'vue'
import App from './App'
import router from './routes'
import store from './stores'

// 以下是插件
import { VTooltip } from 'v-tooltip'
Vue.directive('my-tooltip', VTooltip)

// 创建vue实例并渲染到app
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
