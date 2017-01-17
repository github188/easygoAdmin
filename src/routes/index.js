// 引入插件模块
import VueRouter from 'vue-router'
import Vue from 'vue'

// 引入页面
import Index from '../containers/Index.vue'
import Login from '../containers/Login.vue'
// 启用插件
Vue.use(VueRouter)

// 配置
const routes = [
  {
    path: '/',
    component: Index,
    children: [{
      path: 'machine',
      component: Index,
      children: [
        {path: 'type', component: Login},
        {path: 'aisle', component: Login},
        {path: 'list', component: Login},
        {path: 'map', component: Login},
        {path: 'copy', component: Login}
      ]
    }, {
      path: 'promotion',
      component: Index,
      children: [
        {path: 'desc', component: Login},
        {path: 'list', component: Login}
      ]
    }, {
      path: 'advertise',
      component: Index,
      children: [
        {path: 'list', component: Login},
        {path: 'pushList', component: Login}
      ]
    }, {
      path: 'report',
      component: Index,
      children: [
        {path: 'order', component: Login},
        {path: 'fillGoods', component: Login},
        {path: 'profit', component: Login}
      ]
    }, {
      path: 'system',
      component: Index,
      children: [
        {path: 'sysPay', component: Login},
        {path: 'sysAndroid', component: Login},
        {path: 'sysEgocard', component: Login},
        {path: 'sysEgocardCreate', component: Login},
        {path: 'sysMercardCreate', component: Login}
      ]
    }, {
      path: 'goods',
      component: Index,
      children: [
        {path: 'list', component: Login}
      ]
    }, {
      path: 'org',
      component: Index
    }, {
      path: 'user',
      component: Index,
      children: [
        {path: 'list', component: Login}
      ]
    }, {
      path: 'role',
      component: Index,
      children: [
        {path: 'list', component: Login}
      ]
    }]
  },
  {path: '/login', component: Login}
]

// 传入配置
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes // （缩写）相当于 routes: routes
})

export default router
