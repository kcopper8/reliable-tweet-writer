<template>
  <router-link class="button" :to="to"><slot></slot></router-link>
</template>

<script>
export default {
  name: 'rtw-router-link',
  props: [
    'to',
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
