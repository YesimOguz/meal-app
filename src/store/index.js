import {createStore} from 'vuex'
import Auth from './modules/auth';
import Meal from './modules/meal';
// import router from '../router'
// import { auth } from '../firebase'
// import { 
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   signOut 
// } from 'firebase/auth'
//import state from './modules/meal/state'
// import actions from './actions'
// import mutations from './mutations'
// import getters from './getters'

const store = createStore({
   modules: {
    Auth,
    Meal
   }
})

export default store;

