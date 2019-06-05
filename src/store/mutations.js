const mutations = {
  TOGGLE_SIDEBAR(state) {
    state.drawer = !state.drawer
  },
  UPDATE_THEME(state, val) {
    state.theme = val
  }
}

export default mutations
