import {createStore} from 'vuex'
import Auth from './modules/auth';
import Meal from './modules/meal';

const store = createStore({
   modules: {
    Auth,
    Meal
   }
})

export default store;

