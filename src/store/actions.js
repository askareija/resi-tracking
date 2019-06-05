const actions = {
  updateTheme({ commit }, val) {
    commit('UPDATE_THEME', val)
  },
  toggleSidebar({ commit }) {
    commit('TOGGLE_SIDEBAR')
  }
}

export default actions
