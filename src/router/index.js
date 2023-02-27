import { createRouter, createWebHistory } from "vue-router";
import store from "../store"
import Home from '../views/Home.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByIngredient from '../views/MealsByIngredient.vue'
import MealDetails from '../views/MealDetails.vue'
import Ingredients from '../views/Ingredients.vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import AuthLayout from '../layouts/AuthLayout.vue'
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
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
          path: '/meals',
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
      component: AuthLayout,
      children: [
        {
            path: '/login',
            name: 'login',
            component: Login
        }
      ]
  },
  {
    path: '/signup',
    component: AuthLayout,
    children: [
      {
          path: '/signup',
          name: 'signup',
          component: Signup
      }
    ]
}
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach(async (to, from, next) => {
  if (!store.state.Auth.isInitialized) {
    return checkState().then(user => {
      store.state.Auth.isInitialized = true
      if (user === null) {
        store.commit('CLEAR_USER')
        next()
      } else {
        store.commit('SET_USER', user)
        if (to.path === '/login') {
          next('/')
          return
        }
        next()
      }
    })
  } else {
    if (to.path === '/login' && auth.currentUser) {
      next('/')
      return
    }
  
    if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
      next('/login')
      return
    }
  
    next()
  }

})

function checkState() {
  return new Promise((resolve) => auth.onAuthStateChanged(resolve))
}

export default router;