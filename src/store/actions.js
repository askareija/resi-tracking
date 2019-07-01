const actions = {
  setDarkMode({ commit }, val) {
    commit('SET_DARK_MODE', val)
  },
  setNoResi({ commit }, noResi) {
    commit('SET_NO_RESI', noResi)
  },
  setExpType({ commit }, expType) {
    commit('SET_EXP_TYPE', expType)
  },
  setReceipt({ commit }, receipt) {
    commit('SET_RECEIPT', receipt)
  }
}

export default actions
