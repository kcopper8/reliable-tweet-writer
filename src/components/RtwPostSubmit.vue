<template>
<form :action="action" method="POST" :target="target">
  <input type="hidden" :name="value.name" v-model="value.value">
  <button type="submit" class="button" @click="click">{{submitText}}</button>
</form>
</template>

<script>
export default {
  name: 'rtw-post-submit',
  props: ['action', 'target', 'value', 'submitText'],
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>


<style scoped>
FORM {
  display: inline;
}

.button {
  padding: 10px;
}
</style>
