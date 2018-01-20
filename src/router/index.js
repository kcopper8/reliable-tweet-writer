import Vue from 'vue';
import Router from 'vue-router';
import Editor from '@/components/Editor';
import ThreadList from '@/components/ThreadList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Editor',
      component: Editor,
    },
    {
      path: '/threads',
      name: 'ThreadList',
      component: ThreadList,
    },
  ],
});
