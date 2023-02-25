<template>
  <Meals :meals="meals" />
</template>

<script>
import axios from "axios";
import baseURL from "../baseURL";
import Meals from "../components/Meals.vue";

export default {
  components: { Meals },
  data() {
    return {
      meals: [],
    };
  },
  created() {
    this.getMealsByIngredients();
  },
  methods: {
    getMealsByIngredients() {
      axios
        .get(`${baseURL}filter.php?i=${this.$route.params.ingredient}`)
        .then((response) => (this.meals = response.data.meals || []));
    },
  },
};
</script>
