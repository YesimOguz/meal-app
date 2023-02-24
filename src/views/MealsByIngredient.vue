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

<style lang="scss">
// $large-screen: 1024px;
// $medium-screen: 768px;
// $small-screen: 576px;

// .meals-by-ingredients {
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: stretch;
//   margin: 0 auto;
//   gap: 60px;
//   margin: 30px 0;

//   .meal {
//     width: 100%;
//     padding: 10px;
//     box-sizing: border-box;

//     @media (min-width: $small-screen) {
//       width: calc(100% / 2);
//     }

//     @media (min-width: $medium-screen) {
//       width: calc(100% / 3);
//     }

//     @media (min-width: $large-screen) {
//       width: calc(100% / 4);
//     }
//   }
// }
</style>
