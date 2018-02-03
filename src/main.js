// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import App from './App';
import router from './router';
import RtwForm from './components/RtwForm';
import RtwBottomNav from './components/RtwBottomNav';


Vue.config.productionTip = false;

Vue.component(RtwForm.name, RtwForm);
Vue.component(RtwBottomNav.name, RtwBottomNav);

Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
