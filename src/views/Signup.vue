<template>
  <main class="reigster">
    <section class="forms">
      <form class="register" @submit.prevent="register()">
        <h2>Signup</h2>
        <input
          type="email"
          placeholder="Email address"
          v-model="registerForm.email"
        />
        <input
          type="password"
          placeholder="Password"
          v-model="registerForm.password"
        />
        <input type="submit" value="Signup" />
        <button class="login" @click="$router.push('/login')">Login</button>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Signup',
  data() {
    return {
      registerForm: {
        email: null,
        password: null
      },
      isDisabled: false
  
    };
  },
  methods: {
    register() {
      if (!this.isDisabled) {
        this.isDisabled = true
        this.$store.dispatch("register", this.registerForm)
          .then(() => {
            this.$notify({
                type: "success",
                text: "Signup Success!"
            })
            this.$router.push('/')
          })
          .catch(error => {
            switch(error.code) {
                case 'auth/email-already-in-use':
                  this.$notify({ type: "error", text: "Email already in use" })
                  break
                case 'auth/invalid-email':
                this.$notify({ type: "error", text: "Invalid email" })
                  break
                case 'auth/operation-not-allowed':
                  this.$notify({ type: "error", text: "Operation not allowed" })
                  break
                case 'auth/weak-password':
                  this.$notify({ type: "error", text: "Weak password" })
                  break
                default:
                  this.$notify({ type: "error", text: "Something went wrong" })

              }
          })
          .finally(() => {
            this.isDisabled = false
          })
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.forms {
  display: flex;
  min-height: 100vh;
  flex-direction: row;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
}

form {
  flex: 1 1 0%;
  padding: 8rem 1rem 1rem;

  @media only screen and (max-width: 768px) {
    padding: 2rem 1rem 1rem;
    max-width: 100%;
  }
}

form.register {
  color: #fff;
  background-color: #b38bbb;
  background-image: linear-gradient(to bottom right, #b38bbb 0%, #453c46 100%);

  @media only screen and (max-width: 768px) {
    max-width: none;
  }
}

h2 {
  font-size: 2rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
}

input {
  appearance: none;
  border: none;
  outline: none;
  background: none;
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  padding: 0.5rem 0rem;

  @media only screen and (max-width: 768px) {
    max-width: none;
  }
}

input:not([type="submit"]) {
  opacity: 0.8;
  transition: 0.4s;
}

input:focus:not([type="submit"]) {
  opacity: 1;
}

input::placeholder {
  color: inherit;
}

form.register input:not([type="submit"]) {
  color: #fff;
  border-bottom: 2px solid #fff;
}

form.register input[type="submit"] {
  background-color: #fff;
  color: #965ea1;
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
}

.login {
  background-image: linear-gradient(to bottom right, #b38bbb 0%, #453c46 100%);
  color: #fff;
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
  display: block;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  font-size: 1.5rem;
  margin-bottom: 2rem;
  padding: 0.5rem 0rem;
  border: none;
}
</style>
