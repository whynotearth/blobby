import { httpClient } from '@/services/httpClient';

const state = {
  provider: '',
  returnURL: ''
};

const getters = {
  oauth(state) {
    return `${process.env.VUE_APP_API_URL}/connect/${state.provider}`;
  },
  returnURL(state) {
    return state.returnURL;
  }
};

const actions = {
  ping({ commit, state }) {
    console.log(state.returnURL);
    httpClient
      .get(state.returnURL)
      .then(res => {
        if (res.status !== 200) {
          throw new Error(`Couldn't login to Strapi. Status: ${res.status}`);
        }
        return res;
      })
      .then(res => res.json())
      .then(res => {
        commit('updateProvider', '');
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      httpClient
        .post(`authentication/provider/logout?provider=${state.provider}`)
        .then(
          () => {
            commit('updateProvider', '');
            commit('updateToken', null);
            resolve('Log Out Successful');
          },
          error => {
            reject(error);
          }
        );
    });
  }
};

const mutations = {
  updateProvider(state, payload) {
    state.provider = payload;
  },
  updateReturnUrl(state, payload) {
    state.returnURL = payload;
  },
  updateToken(state, payload) {
    if (payload) {
      httpClient.defaults.headers.common['Authorization'] = `Bearer ${payload}`;
    } else {
      delete httpClient.defaults.headers.common['Authorization'];
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
