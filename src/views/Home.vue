<template>
  <Loader v-if="!isLoaded" />
  <div v-else-if="!meals.length">No meals found!</div>
  <Meals v-else :meals="meals" />
</template>

<script>
import Loader from "../components/Loader.vue";
import api from "../../api";
import Meals from "../components/Meals.vue";

export default {
  components: { Meals, Loader },
  data() {
    return {
      meals: [],
      isLoaded: false,
    };
  },
  mounted() {
    this.getRandomMeals();
  },
  methods: {
    getRandomMeals() {
      api
        .get("search.php?s")
        .then((response) => {
          if (response.data.meals) {
            this.meals = response.data.meals
              .sort(() => 0.5 - Math.random())
              .slice(0, 12);
          }
        })
        .catch(() => {
          this.$notify({
            type: "error",
            text: "Something went wrong!",
          });
        })
        .finally(() => {
          this.isLoaded = true;
        });
    },
  },
};
</script>
