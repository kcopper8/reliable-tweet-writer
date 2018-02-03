<template>
  <v-dialog persistent v-model="open">
    <v-card>
      <v-card-title>
        <span class="headline">Reply</span>
      </v-card-title>
      <v-card-text>
        <v-text-field
              label="tweet to reply"
              multi-line
              v-model="toReplyTweet"
        ></v-text-field>
      </v-card-text>
      <v-card-actions>
        <v-btn flat color="error" @click="remove">Remove</v-btn>
        <v-spacer />
        <v-btn flat color="primary" @click="confirm">Confirm</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import DataService from '@/service/DataServiceHolder';

function extractTweetId(url) {
  const result = /^(?:https:\/\/)?twitter.com\/[^/]+\/status\/(\d+)$/.exec(url);
  if (result) {
    return result[1];
  }

  return url;
}

export default {
  data() {
    return {
      toReplyTweet: DataService.loadReplyId(),
      open: true,
      validText: '',
    };
  },
  computed: {
    valid() {
      return /^\d+$/.test(this.toReplyTweet);
    },
  },
  methods: {
    confirm() {
      if (this.toReplyTweet) {
        DataService.saveReplyId(this.toReplyTweet);
      }
      this.$emit('close');
    },
    remove() {
      DataService.removeReplyId();
      this.toReplyTweet = DataService.loadReplyId();
      this.$emit('close');
    },
  },
  watch: {
    toReplyTweet() {
      this.toReplyTweet = extractTweetId(this.toReplyTweet);
    },
  },
};
</script>

<style>

</style>
