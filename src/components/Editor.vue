<template>
<div class="wrap">
  <div class="box">
    <textarea class="text" v-model="message" placeholder="tweet contents"></textarea>
  </div>
  <div class="function_wrap">
    <a class="button submitText" :href="tweetIntentUrl" target="TweetWindow">tweet</a>
    <button class="button" @click="newThread">New Text</button>
    <router-link class="button submitText" to="/threads">Thread List</router-link>
  </div>
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
  padding: 10px 0 150px;
  height: 100%;
}

.text {
  width: 100%;
  height: 100%;
}

.function_wrap {
  position: fixed;
  bottom: 105px;
}

.submitText {
  border: solid 1px;
  border-width: 2px;
  border-style: outset;
  -webkit-appearance: button;
  text-transform: none;
  text-indent: 0px;
  font: 400 13.3px Arial;
  text-align: center;
  color: buttontext;
  text-decoration: none;
}

.button {
  padding: 10px;
}

</style>
