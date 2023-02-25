<template>
  <div class="meal-details-card">
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="img" />
    <div>
      <h1 class="title">{{ meal.strMeal }}</h1>
      <div class="category-area-tags">
        <p><strong class="strong">CATEGORY:</strong> {{ meal.strCategory }}</p>
        <p><strong class="strong">AREA:</strong> {{ meal.strArea }}</p>
        <p v-if="meal.strTags">
          <strong class="strong">TAGS: </strong>{{ meal.strTags }}
        </p>
      </div>
      <p class="instructions">
        <strong class="strong">INSTRUCTIONS:</strong> {{ meal.strInstructions }}
      </p>
      <div class="title-and-list">
        <h2 class="subtitle">INGREDIENTS AND MEASURES</h2>
        <ul
          v-for="([key, value], index) of Object.entries(
            IngredientsWithMeasures
          )"
          class="list"
        >
          <li class="list-item">{{ index + 1 }}. {{ key }}: {{ value }}</li>
        </ul>
      </div>
      <div class="icons">
        <IconLink
          v-if="meal.strYoutube"
          :href="meal.strYoutube"
          prefix="fab"
          iconName="youtube"
          class="youtube-icon"
        />
        <IconLink
          v-if="meal.strSource"
          :href="meal.strSource"
          prefix="fab"
          iconName="sourcetree"
          class="source-icon"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import baseURL from "../baseURL";
import IconLink from "../components/IconLink.vue";

export default {
  components: { IconLink },
  data() {
    return {
      meal: {},
      ingredients: [],
      measures: [],
      //ingredientsWithMeasures: {},
    };
  },
  created() {
    this.getMealDetails();
  },
  computed: {
    IngredientsWithMeasures() {
      return Object.assign(
        ...this.ingredients.map((k, i) => ({ [k]: this.measures[i] }))
      );
    },
  },
  methods: {
    getMealDetails() {
      axios
        .get(`${baseURL}lookup.php?i=${this.$route.params.id}`)
        .then((response) => {
          this.meal = response.data.meals[0] || {};
          for (let key in this.meal) {
            if (this.meal[key]) {
              if (key.includes("strIngredient")) {
                this.ingredients.push(this.meal[key]);
              }
              if (key.includes("strMeasure")) {
                this.measures.push(this.meal[key]);
              }
            }
          }
        });
    },
  },
};
</script>

<style lang="scss">
// Mobile-first styles
.meal-details-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  .img {
    width: 100%;
    height: auto;
    margin-bottom: 20px;
    border-radius: 10px;
  }

  .title {
    font-size: 24px;
    margin-bottom: 10px;
    text-align: center;
  }

  .category-area-tags {
    margin-bottom: 20px;
    text-align: center;
  }

  .instructions {
    margin: 20px 5px;
    text-align: justify;
  }

  .title-and-list {
    width: 100%;
    margin-bottom: 20px;

    .subtitle {
      font-size: 20px;
      margin-bottom: 10px;
      text-align: center;
    }

    .list {
      margin: 0;
      padding: 0;
      list-style: none;

      .list-item {
        margin: 5px 0;
        text-align: center;
      }
    }
  }

  .icons {
    display: flex;
    justify-content: center;
    align-items: center;

    .youtube-icon {
      color: #e90a0a;
      margin: 0 10px;
      font-size: 32px;
    }
    .source-icon {
      color: #030303;
      margin: 0 10px;
      font-size: 32px;
    }
  }

  // Media queries for larger screens
  @media only screen and (min-width: 768px) {
    max-width: 768px;
    margin: 0 auto;
    padding: 40px;

    .img {
      max-width: 50%;
      margin-bottom: 40px;
    }

    .title {
      font-size: 32px;
      margin-bottom: 20px;
    }

    .category-area-tags {
      margin-bottom: 30px;
    }

    .instructions {
      margin-bottom: 30px;
      text-align: left;
    }

    .title-and-list {
      width: 60%;
      margin-bottom: 30px;

      .subtitle {
        font-size: 24px;
        margin-bottom: 20px;
        text-align: left;
      }

      .list {
        .list-item {
          text-align: left;
        }
      }
    }

    .icons {
      margin-top: 30px;

      .youtube-icon {
        font-size: 40px;
        margin: 0 10px 0 0;
      }
      .source-icon {
        font-size: 40px;
      }
    }
  }
}

// .youtube-icon {
//   color: rgb(233, 10, 10);
// }
// .source-icon {
//   color: rgb(3, 3, 3);
// }
</style>
