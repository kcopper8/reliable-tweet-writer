<template>
  <button class="button" @click="click"><slot></slot></button>
</template>

<script>
export default {
  name: 'rtw-button',
  methods: {
    click() {
      this.$emit('click');
    },
  },
};
</script>
