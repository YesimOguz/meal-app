<template>
  <header class="header">
    <router-link class="link" :to="{ name: 'meals' }"> MEALS </router-link>
    <div class="search-options">
      <router-link class="link" :to="{ name: 'mealsByName' }"
        >SEARCH BY NAME</router-link
      >
      <router-link class="link" :to="{ name: 'ingredients' }"
        >SEARCH BY INGREDIENTS
      </router-link>
      <button v-if="user" @click="$store.dispatch('logout')" class="logout">
        LOGOUT
      </button>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      user: (state) => state.Auth.user,
    }),
  },
  beforeMount() {
    this.$store.dispatch("fetchUser");
  },
};
</script>

<style lang="scss">
// Define variables for common values
$header-height: 80px;
$link-padding: 0 16px;
$mobile-breakpoint: 600px;
$primary-color: #ee76d6;
$background-color: #f5f5f5;
$hover-color: #ffffff;

// Header styles
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: $header-height;
  background-color: #eadfec;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  // Media query for mobile screens
  @media only screen and (max-width: $mobile-breakpoint) {
    flex-direction: column;
    height: auto;
  }

  // Router link styles
  .link {
    padding: $link-padding;
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
    color: #333;
    text-decoration: none;
    transition: all 0.3s;

    // Media query for mobile screens
    @media only screen and (max-width: $mobile-breakpoint) {
      padding: 16px 0;
      font-size: 24px;
      text-align: center;
    }

    // Hover styles
    &:hover {
      color: $hover-color;
    }

    // Add space between links
    & + & {
      margin-left: 16px;

      // Media query for mobile screens
      @media only screen and (max-width: $mobile-breakpoint) {
        margin: 8px 0 0;
      }
    }
  }

  // Dropdown styles
  .search-options {
    display: flex;

    // Media query for mobile screens
    @media only screen and (max-width: $mobile-breakpoint) {
      flex-direction: column;
    }

    // Router link styles
    .link {
      font-size: 16px;

      // Media query for mobile screens
      @media only screen and (max-width: $mobile-breakpoint) {
        font-size: 20px;
      }

      // Hover styles
      &:hover {
        color: $hover-color;
      }

      // Add space between links
      & + & {
        margin-left: 16px;

        // Media query for mobile screens
        @media only screen and (max-width: $mobile-breakpoint) {
          margin: 8px 0 0;
        }
      }
    }

    .logout {
      background: none !important;
      border: none;
      padding: 0 !important;
      color: #333;
      margin: $link-padding;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;

      // Hover styles
      &:hover {
        color: $hover-color;
      }

      // Media query for mobile screens
      @media only screen and (max-width: $mobile-breakpoint) {
        font-size: 20px;
        margin: 8px 0 8px;
      }
    }
  }
}
</style>
