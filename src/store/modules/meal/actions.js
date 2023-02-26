import baseURL from '../../../baseURL';
import axios from 'axios';

export default {
    searchMealsByName({ commit }, name) {
        axios.get(`${baseURL}search.php?s=${name}`)
           .then((response) => {
             commit('setSearchedMeals', response.data.meals)
            })
    },
    searchMealsByIngredient({ commit }, ingredient) {
        axios.get(`${baseURL}filter.php?i=${ingredient}`)
           .then((response) => {
             commit('setMealsByIngredient', response.data.meals)
            })
    },
    getRandomMeals({ commit }) {
        axios.get(`${baseURL}search.php?s`)
           .then((response) => {
             commit('setRandomMeals', response.data.meals
             .sort(() => 0.5 - Math.random())
             .slice(0, 12))
           })
    }
};