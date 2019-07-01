const mutations = {
  SET_DARK_MODE(state) {
    state.darkMode = !state.darkMode
  },
  SET_NO_RESI(state, noResi) {
    state.noResi = noResi
  },
  SET_EXP_TYPE(state, expType) {
    state.expType = expType
  },
  SET_RECEIPT(state, receipt) {
    state.receipt = receipt
  }
}

export default mutations
