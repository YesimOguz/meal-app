<template>
  <div id="app">
    <notifications position="bottom right" />
    <router-view></router-view>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  min-height: 100%;
  text-align: center;
  font-family: "Montserrat", sans-serif;
}
</style>
