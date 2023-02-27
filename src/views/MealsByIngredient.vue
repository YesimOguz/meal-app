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
    this.getMealsByIngredients();
  },
  methods: {
    getMealsByIngredients() {
      api
        .get(`filter.php?i=${this.$route.params.ingredient}`)
        .then((response) => (this.meals = response.data.meals || []))
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
