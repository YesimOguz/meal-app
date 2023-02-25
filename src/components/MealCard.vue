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
    <!-- <a :href="meal.strYoutube" target="_blank">
      <FontAwesomeIcon :icon="['fab', 'youtube']" class="youtube-icon" />
    </a> -->
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
// .meal-card {
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border-radius: 4px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
//   margin: 20px;
//   width: 400px;

//   .img {
//     width: 100%;
//     height: 300px;
//     object-fit: cover;
//   }

//   h3 {
//     margin-top: 10px;
//     font-size: 16px;
//     color: #333;
//     text-align: center;
//     padding: 10px;
//     width: 100%;
//     box-sizing: border-box;
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//   }
//}

// .meal-card {
//   box-shadow: rgba(0, 0, 0, 0.117647) 0px 1px 6px,
//     rgba(0, 0, 0, 0.117647) 0px 1px 4px;
//   max-width: 200px;
//   margin: 12px;
//   transition: 0.15s all ease-in-out;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
// }
// .meal-card:hover {
//   box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
//   transform: scale(1.1);
// }

// .img {
//   max-width: 100%;
// }

// .ellipsis {
//   overflow: hidden;
//   text-overflow: ellipsis;
//   white-space: nowrap;
// }

// @media only screen and (min-width: 768px) {
//   .meal-card {
//     max-width: 250px;
//   }
// }

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
    color: #E90A0A;
    //font-size: 2rem;
    //padding: 20px;
  }
}
</style>
