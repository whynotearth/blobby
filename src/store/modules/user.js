const state = {
  username: '',
  id: 0,
  email: '',
  confirmed: true
};

const getters = {
  getUsername(state) {
    return state.username;
  },
  getId(state) {
    return state.id;
  },
  getEmail(state) {
    state.email;
  }
};

const actions = {
  saveUser({ commit }, payload) {
    commit('updateUserState', payload);
  }
};

const mutations = {
  updateUserState(state, payload) {
    state.username = payload.username;
    state.id = payload.id;
    state.email = payload.email;
    state.confirmed = payload.confirmed;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
