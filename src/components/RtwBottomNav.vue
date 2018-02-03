<template>
  <v-bottom-nav value="true">
    <v-btn value="Editor" to="/" exact>
      <span>New</span>
      <v-icon>create</v-icon>
    </v-btn>
    <v-btn value="ThreadList" to="/threads">
      <span>Threads</span>
      <v-badge>
        <v-icon>view_list</v-icon>
        <span slot="badge">{{threadCount}}</span>
      </v-badge>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
import DataService from '@/service/DataServiceHolder';

export default {
  name: 'rtw-bottom-nav',
  data() {
    return {
      threadCount: DataService.threadList().length,
    };
  },
};
</script>

<style>

</style>
