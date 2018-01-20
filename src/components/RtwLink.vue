<template>
  <a class="button submitText" :href="href" :target="target"><slot></slot></a>
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
