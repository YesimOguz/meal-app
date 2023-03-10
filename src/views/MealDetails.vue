<template>
  <Loader v-if="!isLoaded" />
  <div v-else-if="!meal.strMeal">Not found!</div>
  <div v-else class="meal-details-card">
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
          v-for="(ingredientWithMeasure, index) of ingredientsWithMeasures"
          class="list"
        >
          <li class="list-item">
            {{ index + 1 }}. {{ ingredientWithMeasure.ingredient }}:
            {{ ingredientWithMeasure.measure }}
          </li>
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
import Loader from "../components/Loader.vue";
import api from "../../api";
import IconLink from "../components/IconLink.vue";

export default {
  components: { IconLink, Loader },
  data() {
    return {
      meal: {},
      ingredientsWithMeasures: [],
      isLoaded: false,
      error: null,
    };
  },
  created() {
    this.getMealDetails();
  },
  methods: {
    getMealDetails() {
      api
        .get(`lookup.php?i=${this.$route.params.id}`)
        .then((response) => {
          this.meal = (response.data.meals && response.data.meals[0]) || {};
          for (let key in this.meal) {
            const value = this.meal[key];
            if (value) {
              if (key.includes("strIngredient")) {
                const number = key.split("strIngredient")[1];
                this.ingredientsWithMeasures.push({
                  measure: this.meal[`strMeasure${number}`],
                  ingredient: value,
                });
              }
            }
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
</style>
