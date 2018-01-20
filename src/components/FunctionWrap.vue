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

.button {
  padding: 10px;
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

</style>
