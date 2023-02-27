<template>
  <div>
    <input
      type="text"
      v-model="search"
      placeholder="Search meals..."
      class="search-input"
      data-test-search-input
    />
  </div>
  <Meals :meals="meals" />
  <Loader v-if="!isLoaded" />
  <div v-else-if="isSearchTriggered && !meals.length">No meals found!</div>
</template>

<script>
import Loader from "../components/Loader.vue";
import api from "../../api";
import Meals from "../components/Meals.vue";
export default {
  components: {
    Meals,
    Loader,
  },
  data() {
    return {
      search: "",
      meals: [],
      isLoaded: true,
      isSearchTriggered: false,
      searchTimer: null,
    };
  },
  watch: {
    search() {
      clearTimeout(this.searchTimer);
      if (this.search) {
        this.searchTimer = setTimeout(() => {
          this.searchMeals();
        }, 1000);
      } else {
        this.searchMeals();
      }
    },
  },
  mounted() {
    if (this.$route.query.name) {
      this.search = this.$route.query.name;
    }
  },
  methods: {
    searchMeals() {
      this.isSearchTriggered = true;
      this.isLoaded = false;
      api
        .get(`search.php?s=${this.search}`)
        .then((response) => {
          this.meals = response.data.meals || [];
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

<style lang="scss">
.search-input {
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
