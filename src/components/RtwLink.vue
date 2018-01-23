<template>
  <a class="button" :href="href" :target="target"><slot></slot></a>
</template>

<script>
export default {
  name: 'rtw-link',
  props: [
    'href',
    'target',
  ],
};
</script>

<style scoped>

.button {
  padding: 10px;
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
