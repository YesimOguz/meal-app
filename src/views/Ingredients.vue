<template>
  <div class="ingredients-container">
    <h1>INGREDIENTS</h1>
    <div class="card-container">
      <router-link
        :to="{
          name: 'mealsByIngredient',
          params: { ingredient: ingredient.strIngredient },
        }"
        v-for="ingredient in ingredients"
        :key="ingredient.idIngredient"
        class="ingredient-link"
      >
        <div class="card">
          <h3>{{ ingredient.strIngredient }}</h3>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import baseURL from "../baseURL";

export default {
  data() {
    return {
      ingredients: [],
    };
  },
  created() {
    this.getIngredients();
  },
  methods: {
    getIngredients() {
      axios
        .get(`${baseURL}list.php?i=list`)
        .then((response) => (this.ingredients = response.data.meals || []));
    },
  },
};
</script>

<style lang="scss">
.ingredients-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 2rem;
  margin-bottom: 20px;
  color: #996a8e;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.ingredient-link {
  text-decoration: none;

  .card {
    background-color: #b39eae;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 10px;
    transition: all 0.2s ease-in-out;
    width: 200px;

    &:hover {
      background-color: #73586a;
    }

    h3 {
      font-size: 1rem;
      //margin-bottom: 5px;
      color: #f7f3f6;
    }
  }
}

// Media queries for responsive design
@media screen and (max-width: 768px) {
  .ingredients-container {
    padding: 10px;
  }

  h1 {
    font-size: 1.5rem;
  }

  .card {
    padding: 5px;

    h3 {
      font-size: 1rem;
    }
  }
}

@media screen and (max-width: 576px) {
  h1 {
    font-size: 1.2rem;
  }

  .card {
    padding: 5px;
    width: 100%;

    h3 {
      font-size: 0.8rem;
    }
  }
}
</style>
