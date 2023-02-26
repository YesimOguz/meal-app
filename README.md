# meal-app

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

# Folder structure

## components

This directory contains reusable UI components (IconLink.vue, MealCard.vue, Meals.vue, NavBar.vue) that is used across multiple views in this project. This components prevent to repeat the same codes.

IconLink.vue: It defines a reusable FontAwesomeIcon as a link by using @fortawesome/vue-fontawesome package.

MealCard.vue : This component is used to display a meal card with an image, name and link to more information with YouTube icon if there is Youtube information in data coming from the API.

Meals.vue: It displays a list of meals using the MealCard.vue component.

NavBar.vue: This component represents a header for this project. It consists of a navigation section with links to different pages, a dropdown menu for searching meals by name or ingredients, and a logout button if a user is logged in.

## firebase

The code sets up a connection to a Firebase app using the app's configuration information. It then gets the Firebase authentication service for this app and exports it as auth to be used in other parts of the code.

## layouts

DefaultLayout.vue: This is the default layout used for most pages in this application. It includes a navigation bar (NavBar.vue), which is used across multiple pages. It also includes a router-view component, which displays the content of the specific page being navigated to.

LoginLayout.vue: This is the layout used specifically for the login page. It does not include a navigation bar, it only displays the content of the Login page.

## router

index.js file defines the routes for this application using the Vue Router library. It specifies which component should be displayed for each URL. The routes are defined as an array of objects, with each object representing a route. The path property defines the URL path for that route, while the component property specifies the component that should be rendered when the user navigates to that route.
The children property is used to define nested routes, which inherit the layout of their parent route.
The meta property is used to specify additional metadata for the route for authentication.
After defining the routes, the router is created using the createRouter function and the routes array. The beforeEach method is then used to add a navigation guard that checks if the user is authenticated before allowing access to routes that require authentication.

## store

index.js inside of store folder contains the Vuex store configuration, which is used for managing this application's state.
The modules folder within the store folder is used for organizing the store into smaller, more manageable pieces. Each module within the modules folder have its own state.js, mutations.js, actions.js, and index.js files. By breaking the store into smaller modules, it becomes easier to manage and scale this application's state in case it grows larger and more complex.
The state.js file defines the initial state of the module, which is an object that contains the module's data. The mutations.js file contains functions that can modify the state of the module, and are responsible for updating the state in response to actions. The actions.js file defines the actions that is dispatched to the store, which can trigger mutations. The index.js file is used to export the module's state, mutations, actions.

## views

Each component in the views folder represents a different page or view of this application.

Home.vue: We can see the 12 random meals and it does not require to login, all the other pages require to login. When the component is created, it calls a method called getRandomMeals() which retrieves the data for the random meals from the server using an Axios request. The retrieved data is then stored in the component's Vuex store using the getRandomMeals action. Finally, the Meals component is rendered and passed the meals data as a prop to display the random meals to the user.

MealsByName.vue: We can see a search input field where users can search for meals. When a user types something in the input field, the @input event triggers the searchMeals method. The searchMeals method then dispatches an action to the Vuex store with the user's input as a parameter.
The computed property meals then maps the state from the Vuex store to the component, and the component passes the meals prop to the Meals component, which is a child component. The Meals component takes care of rendering the list of meals based on the prop it receives.

MealsByIngredients: This page displays meals based on a specific ingredient. The ingredient is passed through as a parameter in the URL. The Meals component will display a list of meals that include the specified ingredient. The computed property maps the mealsByIngredient state from the Vuex store to the local meals property.
The created lifecycle hook is used to call the getMealsByIngredients method, which dispatches the searchMealsByIngredient action to the Vuex store with the ingredient parameter from the URL. The action will then make an API call to fetch the meals with the specified ingredient, and update the mealsByIngredient state in the store. The computed property will then update the local meals property with the updated state, and the Meals component will display the meals on the UI.

MealDetails.vue: This page displays details about a meal, including its image, name, category, area, ingredients with their respective measures, instructions, and optional links to YouTube and a source website. The component fetches the meal details from the server using Axios. The meal object and two arrays for ingredients and measures are defined in the data function. The computed function defines a method to merge the ingredients and measures arrays into a single object. The method uses a for loop to iterate over the meal object's properties, filtering for properties with "strIngredient" and "strMeasure" in their names, and adds them to their respective arrays.

Ingredients.vue: This page displays a list of ingredients using data fetched from the API. The component has a template that renders a title, a container for the ingredients, and a card for each ingredient with a link to view meals that use that ingredient. The script section contains methods for fetching the data using Axios and storing it in the component's data.

Login.vue: This page defines a login/register form. The template section contains the HTML markup for the component, including two forms for login and registration. The data section defines the data properties for the component, which in this case are two objects, login_form and register_form, that store the input values for each form. The methods section defines two methods, login and register, which are called when the respective forms are submitted. These methods dispatch actions to the Vuex store to handle authentication.

## App.vue

It contains a router-view component, which is where the different views of this app will be rendered based on the current route.

## baseURL.js

By defining the base URL in a separate JavaScript file, we can easily reuse it across multiple components and modules in this application without having to repeat the URL string in every module.

## main.js

This file imports necessary packages and creates a Vue app with the root component App.vue. It also adds the necessary configuration for router and store. Additionally, it registers the FontAwesomeIcon component from the @fortawesome/vue-fontawesome package and adds the specified fab and fas icons to the fontawesome icon library.It mounts the root component to the app by calling the mount() method with the selector #app.

# Libraries, Frameworks, Platforms

- Vue.js (v3.2.13): Popular JavaScript framework for building user interfaces.
- Vue Router (v4.1.6): Routing library for Vue.js applications.
- Vuex (v4.1.0): State management library for Vue.js applications.
- Axios (v1.3.4): Promise-based HTTP client for the browser and node.js.
- Firebase (v9.17.1): Backend-as-a-service (BaaS) platform that provides tools and infrastructure to build web and mobile applications.
- Sass (v1.58.3): Preprocessor scripting language that is interpreted into CSS.
- Font Awesome (v6.3.0): Popular icon library with a vast collection of icons.
- @fortawesome/fontawesome-svg-core (v6.3.0): The core SVG icon library for Font Awesome.
- @fortawesome/free-brands-svg-icons (v6.3.0): Collection of free brand icons for Font Awesome.
- @fortawesome/free-solid-svg-icons (v6.3.0): Collection of free solid icons for Font Awesome.
- @fortawesome/vue-fontawesome (v3.0.3): Vue.js component that provides easy integration with Font Awesome icons.
- @vue/cli-service (v5.0.0): Command-line interface (CLI) for Vue.js projects that provides an easy way to configure and manage build tools and development servers.
- node-sass (v8.0.0): Library that provides binding for Node.js to LibSass, which is a Sass compiler written in C++.
- sass-loader (v13.2.0): Loader that compiles Sass to CSS and integrates with webpack, a popular JavaScript module bundler.
