<template>
  <div>
    <h1>Set Reply</h1>
    <textarea v-model="toReplyTweet" ></textarea>
    <span>{{validText}}</span>
    <div>
      <rtw-button @click="confirm" :disabled="!valid">confirm</rtw-button>
      <rtw-button @click="remove" :disabled="!valid">remove</rtw-button>
      <rtw-router-link to="/">back to editor</rtw-router-link>
    </div>
  </div>
</template>

<script>
import DataService from '@/service/DataServiceHolder';
import router from '@/router';

export default {
  data() {
    return {
      toReplyTweet: DataService.loadReplyId(),
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
      DataService.saveReplyId(this.toReplyTweet);
      router.push('/');
    },
    remove() {
      DataService.removeReplyId();
      this.toReplyTweet = DataService.loadReplyId();
      router.push('/');
    },
  },
};
</script>

<style scoped>
textarea {
  width: 100%;
  height: 100px;
}
</style>
