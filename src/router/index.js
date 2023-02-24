import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByIngredient from '../views/MealsByIngredient.vue'
import MealDetails from '../views/MealDetails.vue'
import Ingredients from '../views/Ingredients.vue'
//import Login from '../views/Login.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import LoginLayout from '../layouts/LoginLayout.vue'

const routes=[
   {
       path: '/',
       component: DefaultLayout,
       children: [
        {
          path: '/',
          name: 'meals',
          component: Home
        },
        {
          path: '/meals/:name?',
          name: 'mealsByName',
          component: MealsByName
        },
        {
          path: '/ingredients',
          name: 'ingredients',
          component: Ingredients
        },
        {
          path: '/meals-by-ingredient/:ingredient?',
          name: 'mealsByIngredient',
          component: MealsByIngredient
        },
        {
            path: '/meals/:id',
            name: 'mealDetails',
            component: MealDetails
          },
       ]
   },
   {
    path: '/login',
    component: LoginLayout
   }
    // {
    //     path: '/login',
    //     name: 'login',
    //     component: Login,
    // }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;