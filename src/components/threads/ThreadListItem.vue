<template>
  <li>
    <p>{{thread.text.substr(0, 100)}} </p>
    <div>
      <button @click="trigger('load')">load</button>
      <button @click="trigger('clear')">clear</button>
    </div>
  </li>
</template>

<script>
export default {
  name: 'thread-list-item',
  props: ['thread'],
  methods: {
    trigger(eventName) {
      this.$emit(eventName);
    },
  },
};
</script>

<style scoped>
LI {
  margin: 20px 0;
}

P {
  margin: 5px 0;
  overflow: hidden;
  max-height: 60px;
}

BUTTON {
  height: 40px;
}

</style>
