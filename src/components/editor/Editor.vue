<template>
<div class="wrap">
  <div class="box">
    <textarea class="text" v-model="message" placeholder="tweet contents"></textarea>
  </div>
  <function-wrap>
    <rtw-link :href="tweetIntentUrl" target="TweetWindow">tweet</rtw-link>
    <rtw-button @click="newThread">New Text</rtw-button>
    <rtw-router-link to="/threads">Thread List</rtw-router-link>
    <rtw-post-submit
      action="http://small.dic.daum.net/grammar_checker.do"
      target="grammer_check"
      :value="grammerCheckValue"
      submitText="Grammer"
    ></rtw-post-submit>
  </function-wrap>
</div>
</template>

<script>
import DataService from '@/service/DataServiceHolder';

export default {
  name: 'Editor',

  data() {
    return {
      message: DataService.load(),
    };
  },

  computed: {
    tweetIntentUrl() {
      return `https://twitter.com/intent/tweet?text=${encodeURIComponent(this.message)}`;
    },
    grammerCheckValue() {
      return {
        name: 'sentence',
        value: this.message,
      };
    },
  },

  watch: {
    message(message) {
      DataService.save(message);
    },
  },

  methods: {
    newThread() {
      DataService.newThread();
      this.message = DataService.load();
    },
  },
};
</script>

<style scoped>
.wrap {
  width: 100%;
  height: 100%;
}

.box {
  padding: 10px 0;
  height: 100%;
}

.text {
  width: 100%;
  height: 100%;
}
</style>
