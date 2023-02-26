<template>
  <div>
    <input
      type="text"
      v-model="input"
      placeholder="Search meals..."
      class="search-input"
      @input="searchMeals"
    />
  </div>
  <Meals :meals="meals" />
</template>

<script>
// import axios from "axios";
// import baseURL from "../baseURL.js";
import Meals from "../components/Meals.vue";
import { mapState } from "vuex";
export default {
  components: {
    Meals,
  },
  data() {
    return {
      input: "",
      // meals: [],
    };
  },
  computed: {
    ...mapState({
      meals: (state) => state.Meal.searchedMeals,
    }),
  },
  // mounted() {
  //   this.input = this.$route.params.name;
  //   if (this.input) {
  //     this.searchMeals();
  //   }
  // },
  methods: {
    searchMeals() {
      this.$store.dispatch("searchMealsByName", this.input);
      // axios.get(`${baseURL}search.php?s=${this.input}`).then((response) => {
      //   this.meals = response.data.meals || [];
      // });
    },
  },
};
</script>

<style lang="scss">
.search-input {
  //margin: 0 auto;
  margin-top: 30px;
  width: 80%;
  max-width: 500px;
  border-radius: 20px;
  padding: 10px 20px;
  border: 1px solid #ccc;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    box-shadow: 0 0 10px #ccc;
  }
}
</style>
