<template>
  <div>
    <rtw-editor-toolbar
      :tweetIntentUrl="tweetIntentUrl"
      @setReply="replyDialog = true"
      @grammer="grammer"
      @newThread="newThread"
    />
    <rtw-reply-dialog v-if="replyDialog" @close="closeReplyDialog" />
    <v-content>
      <v-subheader v-if="replyId">
          <span>Reply to {{replyId}}</span>
          <v-spacer />
          <v-btn icon @click="removeReplyId">
            <v-icon>delete</v-icon>
          </v-btn>
      </v-subheader>
      <v-text-field
        label="Tweet Contents"
        multi-line
        v-model="message"
        ref="textarea"
        autofocus
        auto-grow
      ></v-text-field>
      <rtw-form
        ref="postSubmit"
        action="http://small.dic.daum.net/grammar_checker.do"
        target="grammer_check"
        name="sentence"
        :value="message"
      />
    </v-content>
    <rtw-bottom-nav />
  </div>
</template>

<script>
import DataService from '@/service/DataServiceHolder';
import RtwReplyDialog from '@/components/reply/RtwReplyDialog';
import RtwEditorToolbar from './RtwEditorToolbar';

export default {
  name: 'rtw-editor',

  data() {
    return {
      message: DataService.load(),
      replyId: DataService.loadReplyId(),
      replyDialog: false,
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
    refreshData() {
      this.message = DataService.load();
      this.replyId = DataService.loadReplyId();
      this.replyDialog = false;
    },
    newThread() {
      DataService.newThread();
      this.refreshData();
    },
    grammer() {
      this.$refs.postSubmit.submit();
    },
    removeReplyId() {
      DataService.removeReplyId();
      this.refreshData();
    },
    closeReplyDialog() {
      this.refreshData();
    },
  },

  components: {
    RtwEditorToolbar,
    RtwReplyDialog,
  },
};
</script>
