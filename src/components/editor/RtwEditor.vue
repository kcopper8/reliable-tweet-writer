<template>
  <v-app>
    <rtw-editor-toolbar
      :tweetIntentUrl="tweetIntentUrl"
      @setReply="replyDialog = true"
      @grammer="grammer"
      @newThread="newThread"
      @selectAll="selectAll"
    />
    <rtw-reply-dialog v-if="replyDialog" @close="closeReplyDialog" />
    <v-content>
      <v-container fluid fill-height pa-0>
        <v-layout column>
          <v-flex>
            <v-subheader v-if="editing.replyId">
                <span>Reply to {{editing.replyId}}</span>
                <v-spacer />
                <v-btn icon @click="removeReplyId">
                  <v-icon>delete</v-icon>
                </v-btn>
            </v-subheader>
          </v-flex>
          <v-flex fill-height>
            <v-text-field
              class="editext"
              style="height:100%"
              hide-details
              full-width
              label="Tweet Contents"
              multi-line
              :value="editing.text"
              @input="updateMessage"
              ref="textarea"
              autofocus
            ></v-text-field>
            <rtw-form
              ref="postSubmit"
              action="http://small.dic.daum.net/grammar_checker.do"
              target="grammer_check"
              name="sentence"
              :value="editing.text"
            />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <rtw-bottom-nav />
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex';
import RtwReplyDialog from '@/components/reply/RtwReplyDialog';
import RtwEditorToolbar from './RtwEditorToolbar';

export default {
  name: 'rtw-editor',

  data() {
    return {
      replyDialog: false,
    };
  },

  computed: {
    tweetIntentUrl() {
      let inReplyTo = '';
      if (this.editing.replyId) {
        inReplyTo = `&in_reply_to=${this.editing.replyId}`;
      }
      const encodedMessage = encodeURIComponent(this.editing.text);
      return `https://twitter.com/intent/tweet?text=${encodedMessage}${inReplyTo}`;
    },
    ...mapGetters([
      'editing',
    ]),
  },

  methods: {
    updateMessage(value) {
      this.$store.commit('setCurrentThreadText', value);
    },
    refreshData() {
      this.replyDialog = false;
    },
    newThread() {
      this.$store.commit('newThread');
    },
    grammer() {
      this.$refs.postSubmit.submit();
    },
    removeReplyId() {
      this.$store.commit('setCurrentThreadReplyId', null);
    },
    closeReplyDialog() {
      this.refreshData();
    },
    selectAll() {
      this.$refs.textarea.$refs.input.select();
    },
  },

  components: {
    RtwEditorToolbar,
    RtwReplyDialog,
  },
};
</script>

<style>
.editext {
  height: 100%;
}

.editext .input-group__details {
  display: none;
}
</style>

