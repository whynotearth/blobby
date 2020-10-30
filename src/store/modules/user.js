const state = {
  user: {}
};

const actions = {
  saveUser({ commit }, payload) {
    commit('updateUserState', payload);
  }
};

const mutations = {
  updateUserState(state, payload) {
    state.user = payload;
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
