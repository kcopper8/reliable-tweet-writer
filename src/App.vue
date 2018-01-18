<template>
  <div id="wrap">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
* {
  box-sizing: border-box;
}

html,body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#wrap {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0 10px;
  height: 100%;
  overflow: hidden;
}
</style>
