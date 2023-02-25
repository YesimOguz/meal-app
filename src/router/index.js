import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByIngredient from '../views/MealsByIngredient.vue'
import MealDetails from '../views/MealDetails.vue'
import Ingredients from '../views/Ingredients.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import LoginLayout from '../layouts/LoginLayout.vue'
import LoginVue from "../views/Login.vue";
import { auth } from '../firebase'

const routes = [
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
          component: MealsByName,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/ingredients',
          name: 'ingredients',
          component: Ingredients,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/meals-by-ingredient/:ingredient?',
          name: 'mealsByIngredient',
          component: MealsByIngredient,
          meta: {
            requiresAuth: true
          }
        },
        {
            path: '/meals/:id',
            name: 'mealDetails',
            component: MealDetails,
            meta: {
              requiresAuth: true
            }
        },
      ]
   },
   {
      path: '/login',
      component: LoginLayout,
      children: [
        {
            path: '/login',
            name: 'login',
            component: LoginVue
        }
      ]
  }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login' && auth.currentUser) {
    next('/')
    return;
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return;
  }

  next();
})

export default router;