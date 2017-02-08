import Vue from 'vue'
import Vuex from 'vuex'
import adminStates from '../states/admin'
import adminMutations from '../mutations/admin'
import adminActions from '../actions/admin'
import adminMachineStates from '../states/admin/machine.js'
import adminMachineMutations from '../mutations/admin/machine.js'
import adminMachineActions from '../actions/admin/machine.js'
import adminAdvertiseStates from '../states/admin/advertise.js'
import adminAdvertiseMutations from '../mutations/admin/advertise.js'
import adminAdvertiseActions from '../actions/admin/advertise.js'
Vue.use(Vuex)

// store中的全局变量，只在store中使用
// vuex实例  store
const admin = {
  state: adminStates,
  mutations: adminMutations,
  actions: adminActions
}
const adminMachine = {
  state: adminMachineStates,
  mutations: adminMachineMutations,
  actions: adminMachineActions
}
const adminAdvertise = {
  state: adminAdvertiseStates,
  mutations: adminAdvertiseMutations,
  actions: adminAdvertiseActions
}

const store = new Vuex.Store({
  modules: {
    admin: admin,
    adminMachine: adminMachine,
    adminAdvertise: adminAdvertise
  }
})

export default store
