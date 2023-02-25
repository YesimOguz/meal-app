import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAhzIqDPYzdm7Xdcqb_JyZ_SK1CGu-KHZ0",
  authDomain: "vue-auth-2e503.firebaseapp.com",
  projectId: "vue-auth-2e503",
  storageBucket: "vue-auth-2e503.appspot.com",
  messagingSenderId: "971633782515",
  appId: "1:971633782515:web:0f41a6a6fe18a4c6471186"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }