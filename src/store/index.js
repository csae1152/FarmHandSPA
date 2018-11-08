import Vue from 'vue'
import Vuex from 'vuex'

import example from './module-farmhand'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    example
  }
})

export default store
