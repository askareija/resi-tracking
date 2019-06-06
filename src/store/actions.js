const actions = {
  updateTheme({ commit }, val) {
    commit('UPDATE_THEME', val)
  },
  toggleSidebar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  setReceiptFormData({ commit }, noResi, expType) {
    commit('SET_RECEIPT_FORM_DATA', noResi, expType)
  }
}

export default actions
