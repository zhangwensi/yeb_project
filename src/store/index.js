import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
    routes:[] //动态路由
  },
  getters: {

  },
  mutations: {
    initRoute: (state,paylod) => {
      state.routes = paylod
    },
    deletRoute: (state,paylod) => {
      state.routes = paylod
    }
  },
  actions: {

  },
  modules: {

  }
})
