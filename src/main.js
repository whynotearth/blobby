import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './styles/tailwind.css';
import Vuelidate from 'vuelidate';
import VueMeta from 'vue-meta';
import SmoothPicker from 'vue-smooth-picker';
import * as GmapVue from 'gmap-vue';
import 'vue-smooth-picker/dist/css/style.css';
import vClickOutside from 'v-click-outside';
import { createProvider } from './vue-apollo';

var dataLayer = dataLayer || [];
require('typeface-open-sans');

Vue.use(SmoothPicker);
Vue.use(Vuelidate);
Vue.use(vClickOutside);
Vue.use(VueMeta, {
  // optional pluginOptions
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  tagIDKeyName: 'vmid',
  refreshOnceOnNavigation: true
});

Vue.use(GmapVue, {
  load: {
    key: process.env.VUE_APP_MAPS_API_KEY,
    libraries: 'places'
  },
  installComponents: true
});

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app');
