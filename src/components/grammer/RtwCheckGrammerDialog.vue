<template>
  <v-dialog :value="open" @input="toggle($event)">
    <v-alert color="error" :value="error">
      {{error}}
    </v-alert>
    <v-card>
      <v-card-title>
        <h3 class="headline mb-0">Check Grammer</h3>
      </v-card-title>
      <v-card-text v-html="grammerResult" ref="result" />
      <v-card-actions>
        <v-btn @click="toggle(false)">close</v-btn>
        <v-spacer />
        <v-btn :disabled="!grammerResult" @click="apply" color="primary">apply</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import jsonp from 'jsonp';

export default {
  props: ['open'],
  data() {
    return {
      grammerResult: '',
      error: '',
    };
  },
  mounted() {
    const q = encodeURIComponent(this.$store.getters.editing.text);
    const url = `https://m.search.naver.com/p/csearch/dcontent/spellchecker.nhn?q=${q}`;
    const opt = {
      param: '_callback',
    };

    jsonp(url, opt, (err, data) => {
      if (err) {
        this.error = err;
        return;
      }

      this.grammerResult = data.message.result.html;
    });
  },
  methods: {
    apply() {
      this.$store.commit('setCurrentThreadText', this.$refs.result.innerText);
      this.toggle(false);
    },
    toggle(toggle) {
      this.$emit('update:open', toggle);
    },
  },
};
</script>

<style>
.re_green {
  color: green;
}

.re_purple {
  color: purple;
}

.re_red {
  color: red;
}
</style>
