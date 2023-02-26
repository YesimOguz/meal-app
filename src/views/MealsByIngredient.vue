<template>
  <Meals :meals="meals" />
</template>

<script>
import axios from "axios";
import baseURL from "../baseURL";
import Meals from "../components/Meals.vue";
import { mapState } from "vuex";
import store from "@/store";

export default {
  components: { Meals },
  computed: {
    ...mapState({
      meals: (state) => state.Meal.mealsByIngredient,
    }),
  },
  created() {
    this.getMealsByIngredients();
  },
  methods: {
    getMealsByIngredients() {
      this.$store.dispatch(
        "searchMealsByIngredient",
        this.$route.params.ingredient
      );
      //   axios
      //     .get(`${baseURL}filter.php?i=${this.$route.params.ingredient}`)
      //     .then((response) => (this.meals = response.data.meals || []));
      // },
    },
  },
};
</script>
