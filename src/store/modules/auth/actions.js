import { auth } from "../../../firebase";
import router from '../../../router'
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut 
} from 'firebase/auth'

export default {
    async login ({ commit }, details) {
        const { email, password } = details

        await signInWithEmailAndPassword(auth, email, password)
        commit('SET_USER', auth.currentUser)
      },
  
    async register ({ commit}, details) {
        const { email, password } = details
  
        await createUserWithEmailAndPassword(auth, email, password)
        commit('SET_USER', auth.currentUser)
      },
  
    async logout ({ commit }) {
        await signOut(auth)
  
        commit('CLEAR_USER')
  
        router.push('/login')
      }
};