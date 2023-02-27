<template>
  <div class="meals">
    <div v-for="meal in meals" :key="meal.idMeal" class="meal">
      <MealCard :meal="meal" />
    </div>
  </div>
</template>

<script>
import MealCard from "../components/MealCard.vue";
export default {
  components: { MealCard },
  props: { meals: { type: Array, default: () => [] } },
};
</script>

<style lang="scss">
$large-screen: 1024px;
$medium-screen: 768px;
$small-screen: 576px;

.meals {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: stretch;
  margin: 0 auto;
  gap: 60px;
  margin: 30px 0;

  .meal {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;

    @media (min-width: $small-screen) {
      width: calc(100% / 2);
    }

    @media (min-width: $medium-screen) {
      width: calc(100% / 3);
    }

    @media (min-width: $large-screen) {
      width: calc(100% / 4);
    }
  }
}
</style>
