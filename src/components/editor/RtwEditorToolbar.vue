<template>
  <v-toolbar app dense color="light-blue" dark>
    <v-toolbar-title>Editor</v-toolbar-title>
    <v-spacer />
    <v-btn icon :href="tweetIntentUrl">
      <i aria-hidden="true" class="fab icon fa-twitter"></i>
    </v-btn>
    <v-menu bottom left>
      <v-btn icon slot="activator">
        <v-icon>more_vert</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile @click="$emit('newThread')">
          <v-list-tile-action>
            <v-icon>add</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>New</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="$emit('setReply')">
          <v-list-tile-action>
            <v-icon>reply</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Reply</v-list-tile-title>
        </v-list-tile>
        <v-list-tile @click="$emit('grammer')">
          <v-list-tile-action>
            <v-icon>live_help</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Grammer</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  props: ['tweetIntentUrl'],
};
</script>
