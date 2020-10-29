import { cloneDeep } from 'lodash-es';

const defaultState = {
  orderLines: []
};

const mutations = {
  addItem(state, payload) {
    state.orderLines.push(payload);
  }
};
const actions = {
  addItem({ commit }, payload) {
    commit('addItem', payload);
  }
};
const getters = {
  getOrderLines: state => {
    return state.orderLines;
  },
  getTotalItemsCount: state => {
    return state.orderLines.length;
  }
};

export default {
  namespaced: true,
  state: cloneDeep(defaultState),
  getters,
  actions,
  mutations
};
