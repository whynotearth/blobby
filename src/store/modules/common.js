import { cloneDeep } from 'lodash-es';

const defaultState = {
  isOverlay: false
};

const mutations = {
  isOverlayVisible(state, payload) {
    state.isOverlay = payload;
  }
};
const actions = {
  isOverlayVisible({ commit }, payload) {
    commit('isOverlayVisible', payload);
  }
};
const getters = {
  isOverlayVisible(state) {
    return state.isOverlay;
  }
};

export default {
  namespaced: true,
  state: cloneDeep(defaultState),
  getters,
  actions,
  mutations
};
