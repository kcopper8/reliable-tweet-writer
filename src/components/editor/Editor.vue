<template>
<div class="wrap">
  <div class="box">
    <textarea ref="textarea" class="text" v-model="message" placeholder="tweet contents"></textarea>
  </div>
  <rtw-editor-function
    :tweetIntentUrl="tweetIntentUrl"
    :grammerCheckValue="grammerCheckValue"
    @newThread="newThread"
    @beforeOpenGrammerCheck="beforeOpenGrammerCheck"
  />
  <strong class="bottomRight" v-if="replyId">Reply</strong>
</div>
</template>

<script>
import DataService from '@/service/DataServiceHolder';
import RtwEditorFunction from './RtwEditorFunction';

export default {
  name: 'Editor',

  data() {
    return {
      message: DataService.load(),
      replyId: DataService.loadReplyId(),
    };
  },

  computed: {
    tweetIntentUrl() {
      let inReplyTo = '';
      if (this.replyId) {
        inReplyTo = `&in_reply_to=${this.replyId}`;
      }
      return `https://twitter.com/intent/tweet?text=${encodeURIComponent(this.message)}${inReplyTo}`;
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
    beforeOpenGrammerCheck() {
      this.$refs.textarea.select();
    },
  },

  components: {
    RtwEditorFunction,
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

.bottomRight {
  position: fixed;
  display: block;
  right: 10px;
  bottom: 10px;
}
</style>
