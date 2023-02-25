<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  // computed: {
  //   layoutComponent() {
  //     console.log("xxxxxx", this.$route);
  //     const layout = this.$route.meta.layout
  //       ? this.$route.meta.layout
  //       : "DefaultLayout";

  //     // Load the component dynamically using import()
  //     try {
  //       const component = import(`./layouts/${layout}.vue`);
  //       return component;
  //     } catch (error) {
  //       console.error(error);
  //       return null;
  //     }
  //   },
  // },
  // created() {
  //   this.$store.dispatch("fetchUser");
  // },
  // created() {
  //   this.$store.dispatch("fetchUser");
  // },
};
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
