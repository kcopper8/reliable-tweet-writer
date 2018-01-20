<template>
<div>
  <h1>Thread List</h1>
  <ul>
    <li
      v-for="thread in threadList"
      v-bind:key="thread.id"
    >
      {{thread.text.substr(0, 20)}} <template v-if="thread.text.length > 20">...</template>
      <button @click="load(thread.id)">load</button>
      <button @click="clear(thread.id)">clear</button>
    </li>
  </ul>
  <router-link to="/">Editor</router-link>
</div>
</template>

<script>
import dataService from '@/service/DataServiceHolder';
import router from '@/router';


export default {
  name: 'ThreadList',

  data() {
    return {
      threadList: dataService.threadList(),
    };
  },

  methods: {
    load(threadId) {
      dataService.setCurrentThread(threadId);
      router.push('/');
    },
    clear(threadId) {
      dataService.clear(threadId);
      this.threadList = dataService.threadList();
    },
  },
};
</script>

<style>

</style>
