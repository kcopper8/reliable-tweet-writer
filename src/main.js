// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import FunctionWrap from './components/FunctionWrap';
import RtwButton from './components/RtwButton';
import RtwLink from './components/RtwLink';
import RtwRouterLink from './components/RtwRouterLink';
import RtwPostSubmit from './components/RtwPostSubmit';

Vue.config.productionTip = false;

Vue.component(FunctionWrap.name, FunctionWrap);
Vue.component(RtwButton.name, RtwButton);
Vue.component(RtwLink.name, RtwLink);
Vue.component(RtwRouterLink.name, RtwRouterLink);
Vue.component(RtwPostSubmit.name, RtwPostSubmit);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
