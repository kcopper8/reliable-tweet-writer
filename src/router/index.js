import Vue from 'vue';
import Router from 'vue-router';
import RtwEditor from '@/components/editor/RtwEditor';
import RtwThreadList from '@/components/threads/RtwThreadList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: RtwEditor.name,
      component: RtwEditor,
    },
    {
      path: '/threads',
      name: RtwThreadList.name,
      component: RtwThreadList,
    },
  ],
});
