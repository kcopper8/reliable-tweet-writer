import Vue from 'vue';
import Router from 'vue-router';
import Editor from '@/components/editor/Editor';
import ThreadList from '@/components/threads/ThreadList';
import RtwReply from '@/components/reply/RtwReply';

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
    {
      path: '/reply',
      name: 'RtwReply',
      component: RtwReply,
    },
  ],
});
