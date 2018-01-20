<template>
  <router-link class="button submitText" :to="to"><slot></slot></router-link>
</template>

<script>
export default {
  name: 'rtw-router-link',
  props: [
    'to',
  ],
};
</script>
