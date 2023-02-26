export default {
    setSearchedMeals(state, meals){
        state.searchedMeals = meals
    },
    setMealsByIngredient(state, meals){
        state.mealsByIngredient = meals
    },
    setRandomMeals(state, meals){
        state.randomMeals = meals
    }
};