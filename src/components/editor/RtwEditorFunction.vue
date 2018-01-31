<template>
  <function-wrap>
    <rtw-link :href="tweetIntentUrl" target="TweetWindow" v-if="mode === 'normal'">tweet</rtw-link>
    <rtw-button @click="newThread" v-if="mode === 'normal'">New Text</rtw-button>
    <rtw-button @click="mode = 'extend'" v-if="mode === 'normal'">More ></rtw-button>

    <rtw-button @click="mode = 'normal'" v-if="mode === 'extend'">&lt; Back</rtw-button>
    <rtw-router-link to="/reply" v-if="mode === 'extend'">Reply</rtw-router-link>
    <rtw-router-link to="/threads" v-if="mode === 'extend'">Thread List</rtw-router-link>
    <rtw-post-submit
      @click="beforeOpenGrammerCheck"
      action="http://small.dic.daum.net/grammar_checker.do"
      target="grammer_check"
      :value="grammerCheckValue"
      submitText="Grammer"
      v-if="mode === 'extend'"
    ></rtw-post-submit>
  </function-wrap>
</template>

<script>
export default {
  props: [
    'tweetIntentUrl',
    'grammerCheckValue',
  ],
  data() {
    return {
      mode: 'normal',
    };
  },
  methods: {
    newThread() {
      this.$emit('newThread');
    },
    beforeOpenGrammerCheck() {
      this.$emit('beforeOpenGrammerCheck');
    },
  },
};
</script>

<style>

</style>
