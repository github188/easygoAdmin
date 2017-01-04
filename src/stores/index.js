import Vue from 'vue'
import Vuex from 'vuex'
import adminStates from '../states/admin'
import adminMutations from '../mutations/admin'
Vue.use(Vuex)

// store中的全局变量，只在store中使用
// vuex实例  store
const admin = {
  state: adminStates,
  mutations: adminMutations
}

const store = new Vuex.Store({
  modules: {
    admin: admin
  }
})

export default store
