// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import App from './App';
import router from './router';
import RtwBottomNav from './components/RtwBottomNav';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Vuex);
Vue.use(Vuetify);

Vue.component(RtwBottomNav.name, RtwBottomNav);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
