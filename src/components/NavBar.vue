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
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
// Define variables for common values
$header-height: 80px;
$link-padding: 0 16px;
$mobile-breakpoint: 600px;
$primary-color: #ee76d6;
$background-color: #f5f5f5;
$hover-color: #e0e0e0;

// Header styles
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: $header-height;
  background-color: rgb(245, 238, 238);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  // Media query for mobile screens
  @media only screen and (max-width: $mobile-breakpoint) {
    flex-direction: column;
    height: auto;
  }

  // Router link styles
  .link {
    padding: $link-padding;
    font-size: 18px;
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

    // Active link styles
    // &.active {
    //   color: $primary-color;
    // }

    // Hover styles
    &:hover {
      color: white;
      background-color: $hover-color;
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
      padding: $link-padding;
      font-size: 16px;
      color: #333;
      text-decoration: none;
      transition: all 0.3s;

      // Media query for mobile screens
      @media only screen and (max-width: $mobile-breakpoint) {
        padding: 16px 0;
        font-size: 20px;
        text-align: center;
      }

      // Active link styles
      //   &.active {
      //     color: $primary-color;
      //   }

      // Hover styles
      &:hover {
        color: white;
        background-color: $hover-color;
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
  }
}
</style>
