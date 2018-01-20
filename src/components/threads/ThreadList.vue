<template>
<div class="scroll">
  <h1>Thread List</h1>
  <ul class="threads">
    <item
      v-for="thread in threadList"
      v-bind:key="thread.id"
      :thread="thread"
      @load="load(thread.id)"
      @clear="clear(thread.id)"
    ></item>
  </ul>
<function-wrap>
  <rtw-router-link to="/">Editor</rtw-router-link>
</function-wrap>
</div>
</template>

<script>
import dataService from '@/service/DataServiceHolder';
import router from '@/router';
import ThreadListItem from './ThreadListItem';

export default {
  name: 'ThreadList',

  data() {
    return {
      threadList: dataService.threadList(),
    };
  },

  components: {
    item: ThreadListItem,
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

<style scoped>
.scroll {
  height: 100%;
  overflow: scroll;
}
.threads {
  padding: 0;
}
</style>
