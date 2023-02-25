<template>
  <main class="login">
    <section class="forms">
      <form class="register" @submit.prevent="register()">
        <h2>Register</h2>
        <input
          type="email"
          placeholder="Email address"
          v-model="register_form.email"
        />
        <input
          type="password"
          placeholder="Password"
          v-model="register_form.password"
        />
        <input type="submit" value="Register" />
      </form>

      <form class="login" @submit.prevent="login()">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email address"
          v-model="login_form.email"
        />
        <input
          type="password"
          placeholder="Password"
          v-model="login_form.password"
        />
        <input type="submit" value="Login" />
      </form>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      login_form: {},
      register_form: {},
    };
  },
  methods: {
    login() {
      this.$store.dispatch("login", this.login_form);
    },
    register() {
      this.$store.dispatch("register", this.register_form);
    },
  },
};

// export default {
//   setup() {
//
//     const login = () => {
//       store.dispatch("login", login_form.value);
//     };
//     const register = () => {
//       store.dispatch("register", register_form.value);
//     };
//     return {
//       login_form,
//       register_form,
//       login,
//       register,
//     };
//   },
// };
</script>

<style lang="scss">
.forms {
  display: flex;
  min-height: 100vh;
}
form {
  flex: 1 1 0%;
  padding: 8rem 1rem 1rem;
}
form.register {
  color: #fff;
  background-color: #b38bbb;
  background-image: linear-gradient(to bottom right, #b38bbb 0%, #453c46 100%);
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
form.login input:not([type="submit"]) {
  color: #2c3e50;
  border-bottom: 2px solid #2c3e50;
}
form.login input[type="submit"] {
  background-color: #b38bbb;
  color: #fff;
  font-weight: 700;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-transform: uppercase;
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
</style>
