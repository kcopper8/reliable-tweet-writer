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
        v-model="thread.isActive"
      >
        <v-list-tile-content>
          <v-list-tile-title>
            <strong v-if="thread.replyId">Re:</strong>
            {{thread.text}}
          </v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-btn icon @click.stop="clear(thread.id)">
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
import router from '@/router';

export default {
  name: 'rtw-thread-list',

  computed: {
    threadList() {
      return this.$store.state.threads.map(thread => Object.assign({
        isActive: thread.id === this.editingIndex,
      }, thread));
    },
    editingIndex() {
      return this.$store.state.editingIndex;
    },
  },

  methods: {
    load(threadId) {
      this.$store.commit('setCurrent', threadId);
      router.push('/');
    },
    clear(threadId) {
      this.$store.commit('delete', threadId);
    },
  },
};
</script>
