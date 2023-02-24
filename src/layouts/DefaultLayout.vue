<template>
  <div>
    <NavBar></NavBar>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
export default {
  components: { NavBar },
};
</script>
