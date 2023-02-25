<template>
  <div class="meal-card">
    <router-link :to="{ name: 'mealDetails', params: { id: meal.idMeal } }">
      <img :src="meal.strMealThumb" class="img" :alt="meal.strMeal" />
    </router-link>
    <h3 class="meal-name">{{ meal.strMeal }}</h3>
    <IconLink
      v-if="meal.strYoutube"
      :href="meal.strYoutube"
      prefix="fab"
      iconName="youtube"
      class="youtube-icon"
    />
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import IconLink from "./IconLink.vue";

export default {
  props: {
    meal: {
      type: Object,
      default: () => ({
        idMeal: null,
        strMeal: null,
        strMealThumb: null,
      }),
    },
  },
  components: { FontAwesomeIcon, IconLink },
};
</script>

<style lang="scss">
.meal-card {
  position: relative;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
    transition: all 0.3s ease;
  }

  .img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .meal-name {
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
    padding: 20px;
    text-align: center;
    color: #333;
  }
  .youtube-icon {
    color: #e90a0a;
  }
}
</style>
