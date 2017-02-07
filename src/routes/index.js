// 引入插件模块
import VueRouter from 'vue-router'
import Vue from 'vue'

// 引入主页面
import Index from '../containers/Index.vue'
import Login from '../containers/Login.vue'
// 引入次级页面
// machine
import Machine from '../containers/machine/Index.vue'
import MachineType from '../containers/machine/Type.vue'
import MachineAisle from '../containers/machine/Aisle.vue'
import MachineAisleList from '../containers/machine/AisleList.vue'
import MachineList from '../containers/machine/List.vue'
import MachineMap from '../containers/machine/Map.vue'
import MachineCopy from '../containers/machine/Copy.vue'
// Promotion
import Promotion from '../containers/promotion/Index.vue'
import PromotionDesc from '../containers/promotion/Desc.vue'
import PromotionList from '../containers/promotion/List.vue'
// Advertise
import Advertise from '../containers/advertise/Index.vue'
import AdvertiseList from '../containers/advertise/List.vue'
import AdvertisePushList from '../containers/advertise/PushList.vue'
// Report
import Report from '../containers/report/Index.vue'
import ReportOrder from '../containers/report/Order.vue'
import ReportFillgoods from '../containers/report/FillGoods.vue'
import ReportProfit from '../containers/report/Profit.vue'
// SystemSysPay
import System from '../containers/system/Index.vue'
import SystemSysPay from '../containers/system/SysPay.vue'
import SystemSysAndroid from '../containers/system/SysAndroid.vue'
import SystemSysEgocard from '../containers/system/SysEgocard.vue'
import SystemSysEgocardCreate from '../containers/system/SysEgocardCreate.vue'
import SystemSysMercardCreate from '../containers/system/SysMercardCreate.vue'
// goods
import Goods from '../containers/goods/Index.vue'
import GoodsList from '../containers/goods/List.vue'
// org
import Org from '../containers/org/Index.vue'
// user
import User from '../containers/user/Index.vue'
import UserList from '../containers/user/List.vue'
// role
import Role from '../containers/role/Index.vue'
import RoleList from '../containers/role/List.vue'
// 启用插件
Vue.use(VueRouter)

// 配置
const routes = [
  {
    path: '/',
    component: Index,
    children: [
      {
        path: 'machine',
        component: Machine,
        children: [
          {path: 'type', component: MachineType},
          {path: 'aisle', component: MachineAisle},
          {path: 'aisleList', component: MachineAisleList},

          {path: 'list', component: MachineList},
          {path: 'map', component: MachineMap},
          {path: 'copy', component: MachineCopy}
        ]
      }, {
        path: 'promotion',
        component: Promotion,
        children: [
          {path: 'desc', component: PromotionDesc},
          {path: 'list', component: PromotionList}
        ]
      }, {
        path: 'advertise',
        component: Advertise,
        children: [
          {path: 'list', component: AdvertiseList},
          {path: 'pushList', component: AdvertisePushList}
        ]
      }, {
        path: 'report',
        component: Report,
        children: [
          {path: 'order', component: ReportOrder},
          {path: 'fillGoods', component: ReportFillgoods},
          {path: 'profit', component: ReportProfit}
        ]
      }, {
        path: 'system',
        component: System,
        children: [
          {path: 'sysPay', component: SystemSysPay},
          {path: 'sysAndroid', component: SystemSysAndroid},
          {path: 'sysEgocard', component: SystemSysEgocard},
          {path: 'sysEgocardCreate', component: SystemSysEgocardCreate},
          {path: 'sysMercardCreate', component: SystemSysMercardCreate}
        ]
      }, {
        path: 'goods',
        component: Goods,
        children: [
          {path: 'list', component: GoodsList}
        ]
      }, {
        path: 'org',
        component: Org
      }, {
        path: 'user',
        component: User,
        children: [
          {path: 'list', component: UserList}
        ]
      }, {
        path: 'role',
        component: Role,
        children: [
          {path: 'list', component: RoleList}
        ]
      }
    ]
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
