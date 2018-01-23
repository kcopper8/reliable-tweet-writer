<template>
  <div class="function_wrap">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'function-wrap',
};
</script>

<style scoped>
.function_wrap {
  position: fixed;
  bottom: 10px;
}
</style>
