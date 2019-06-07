import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import getters from './getters'
import mutations from './mutations'
import actions from './actions'

// import moduleECommerce from './eCommerce/moduleECommerce.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  moudules: {}, // eCommerce: moduleEcommerce
  // https://vuex.vuejs.org/guide/strict.html
  strict: process.env.NODE_ENV !== 'production'
})
