const mutations = {
  TOGGLE_SIDEBAR(state) {
    state.drawer = !state.drawer
  },
  UPDATE_THEME(state, val) {
    state.theme = val
  },
  SET_RECEIPT_FORM_DATA(state, noResi, expType) {
    state.noResi = noResi
    state.expType = expType
  }
}

export default mutations
