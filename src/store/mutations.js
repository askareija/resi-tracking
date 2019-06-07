const mutations = {
  UPDATE_THEME(state, val) {
    state.theme = val
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
