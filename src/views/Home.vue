<template>
  <Meals :meals="meals" />
</template>

<script>
import axios from "axios";
import baseURL from "../baseURL.js";
import Meals from "../components/Meals.vue";
export default {
  components: { Meals },
  data() {
    return {
      meals: [],
    };
  },
  created() {
    this.getRandomMeals();
  },
  methods: {
    getRandomMeals() {
      axios
        .get(`${baseURL}search.php?s`)
        .then(
          (response) =>
            (this.meals = response.data.meals
              .sort(() => 0.5 - Math.random())
              .slice(0, 12))
        );
    },
  },
};
</script>

<style lang="scss"></style>
