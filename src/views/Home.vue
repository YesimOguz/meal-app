<template>
  <Meals :meals="meals" />
</template>

<script>
// import axios from "axios";
import baseURL from "../baseURL.js";
import Meals from "../components/Meals.vue";
import { mapState } from "vuex";
export default {
  components: { Meals },
  computed: {
    ...mapState({
      meals: (state) => state.Meal.randomMeals,
    }),
  },
  created() {
    this.getRandomMeals();
  },
  methods: {
    getRandomMeals() {
      this.$store.dispatch("getRandomMeals");
      // axios
      //   .get(`${baseURL}search.php?s`)
      //   .then(
      //     (response) =>
      //       (this.meals = response.data.meals
      //         .sort(() => 0.5 - Math.random())
      //         .slice(0, 12))
      //   );
    },
  },
};
</script>
