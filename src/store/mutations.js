const mutations = {
  TOGGLE_SIDEBAR(state) {
    state.drawer = !state.drawer
  },
  UPDATE_THEME(state, val) {
    state.theme = val
  },
  SET_NO_RESI(state, noResi) {
    state.noResi = noResi
  },
  SET_EXP_TYPE(state, expType) {
    state.expType = expType
  }
}

export default mutations
