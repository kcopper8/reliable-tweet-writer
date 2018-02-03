<template>
<form :action="action" method="POST" :target="target" ref="form">
  <input type="hidden" :name="name" :value="value">
</form>
</template>

<script>
export default {
  name: 'rtw-form',
  props: ['action', 'target', 'name', 'value'],
  methods: {
    submit() {
      this.$refs.form.submit();
    },
  },
};
</script>
