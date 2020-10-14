import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import common from './modules/common';
import user from './modules/user';
import VuexPersistence from 'vuex-persist';

const vuexSession = new VuexPersistence({
  storage: window.sessionStorage,
  modules: ['auth'],
  key: 'vuexSessionStore'
});

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [vuexSession.plugin],
  modules: {
    auth,
    common,
    user
  }
});
