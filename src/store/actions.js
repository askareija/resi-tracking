const actions = {
  updateTheme({ commit }, val) {
    commit('UPDATE_THEME', val)
  },
  toggleSidebar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  },
  setNoResi({ commit }, noResi) {
    commit('SET_NO_RESI', noResi)
  },
  setExpType({ commit }, expType) {
    commit('SET_EXP_TYPE', expType)
  }
}

export default actions
