<template>
  <v-bottom-nav app value="true" color="light-blue">
    <v-btn value="Editor" to="/" exact color="white" dark>
      <span>Editor</span>
      <v-icon>create</v-icon>
    </v-btn>
    <v-btn value="ThreadList" to="/threads" dark>
      <span>Threads</span>
      <v-badge>
        <v-icon>view_list</v-icon>
        <span slot="badge">{{threadCount}}</span>
      </v-badge>
    </v-btn>
  </v-bottom-nav>
</template>

<script>

export default {
  name: 'rtw-bottom-nav',
  computed: {
    threadCount() {
      return this.$store.state.threads.length;
    },
  },
};
</script>

<style>

</style>
