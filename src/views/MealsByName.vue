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
import axios from "axios";
import baseURL from "../baseURL.js";
import Meals from "../components/Meals.vue";
export default {
  components: {
    Meals,
  },
  data() {
    return {
      input: "",
      meals: [],
    };
  },
  //   created() {
  //     this.searchMeals();
  //   },
  mounted() {
    this.input = this.$route.params.name;
    if (this.input) {
      this.searchMeals();
    }
  },
  methods: {
    searchMeals() {
      axios.get(`${baseURL}search.php?s=${this.input}`).then((response) => {
        this.meals = response.data.meals || [];
        //this.meals = response.data ? response.data.meals || [] : [];
        console.log("bbbbbb", this.meals);
      });
    },
  },
};
</script>

<style lang="scss">
// .search-input {
//   padding: 10px;
//   border: none;
//   border-radius: 4px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   width: 100%;
//   margin-top: 20px;
//   font-size: 16px;
//   color: #333;
//   &:focus {
//     outline: none;
//   }
//   &::placeholder {
//     color: #999;
//   }
// }

// @media screen and (min-width: 768px) {
//   .search-input {
//     max-width: 400px;
//   }
// }

// Define variables for media queries
// $large-screen: 1024px;
// $medium-screen: 768px;
// $small-screen: 576px;

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

// .meals-by-name {
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
