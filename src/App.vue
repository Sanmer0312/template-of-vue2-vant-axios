<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
input {
  outline: none;
}
img {
  width: 100%;
  height: 100%;
}
a {
  text-decoration: none;
  color: inherit;
}
body {
  background: #edf0f8;
}
#app {
  position: relative;
  max-width: 750px;
  min-height: 100vh;
  margin: auto;
  font-size: 16px;
  word-break: break-all;
  color: #333;
  padding-bottom: calc(10px + env(safe-area-inset-bottom));
  padding-bottom: calc(10px + env(safe-area-inset-bottom));
}

.t-c {
  text-align: center;
}
</style>

