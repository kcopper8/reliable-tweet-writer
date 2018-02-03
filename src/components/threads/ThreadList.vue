<template>
<div>
  <v-toolbar app dense color="light-blue" dark>
    <v-toolbar-title>Thread List</v-toolbar-title>
  </v-toolbar>
  <v-content>
    <v-list>
      <v-list-tile
        v-for="thread in threadList"
        v-bind:key="thread.id"
        @click="load(thread.id)"
      >
        <v-list-tile-content>
          <v-list-tile-title>{{thread.text}}</v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-btn icon @click="clear(thread.id)">
            <v-icon large>delete</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
  </v-content>
  <rtw-bottom-nav />
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

<style scoped>
.scroll {
  height: 100%;
  overflow: scroll;
}
.threads {
  padding: 0;
}
</style>
