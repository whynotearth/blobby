import { cloneDeep, without } from 'lodash-es';

const defaultState = {
  orderLines: []
};

const mutations = {
  addItem(state, payload) {
    state.orderLines.push(payload);
  },
  deleteItem(state, payload) {
    state.orderLines = payload;
  },
  emptyCart(state) {
    state.orderLines = [];
  }
};
const actions = {
  addItem({ commit }, payload) {
    commit('addItem', payload);
  },
  deleteItem({ commit, state }, payload) {
    let newPayload = without(state.orderLines, payload);
    commit('deleteItem', newPayload);
  },
  emptyCart({ commit }) {
    commit('emptyCart');
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
