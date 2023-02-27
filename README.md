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

### Unit test running

```
npm test <file path>
```

# Folder structure

## components

This directory contains reusable UI components (IconLink.vue, Loader.vue, MealCard.vue, Meals.vue, NavBar.vue) that is used across multiple views in this project. This components prevent to repeat the same codes.

IconLink.vue: It defines a reusable FontAwesomeIcon as a link by using @fortawesome/vue-fontawesome package.

Loader.vue: This component displays a spinning circle animation meant to indicate that data from API is loading or processing.

MealCard.vue : This component is used to display a meal card with an image, name and link to more information with YouTube icon if there is Youtube information in data coming from the API.

Meals.vue: It displays a list of meals using the MealCard.vue component.

NavBar.vue: This component represents a header for this project. It consists of a navigation section with links to different pages, a dropdown menu for searching meals by name or ingredients, and a logout button if a user is logged in.

## firebase

The code sets up a connection to a Firebase app using the app's configuration information. It then gets the Firebase authentication service for this app and exports it as auth to be used in other parts of the code.

## layouts

AuthLayout.vue: This is the layout used specifically for the login and register page. It does not include a navigation bar, it only displays the content of the Login and register page.

DefaultLayout.vue: This is the default layout used for most pages in this application. It includes a navigation bar (NavBar.vue), which is used across multiple pages. It also includes a router-view component, which displays the content of the specific page being navigated to.

## router

index.js file defines the routes for this application using the Vue Router library. It specifies which component should be displayed for each URL. The routes are defined as an array of objects, with each object representing a route. The path property defines the URL path for that route, while the component property specifies the component that should be rendered when the user navigates to that route.
The children property is used to define nested routes, which inherit the layout of their parent route.
The meta property is used to specify additional metadata for the route for authentication.
After defining the routes, the router is created using the createRouter function and the routes array. The beforeEach method is then used to add a navigation guard that checks if the user is authenticated before allowing access to routes that require authentication. The "checkState" function uses Firebase Authentication to determine if a user is currently logged in, and returns a Promise that resolves with the user's authentication state.

## store

index.js file inside of store folder contains the Vuex store configuration, which is used for managing this application's state for authentication.The modules folder within the store folder is used for organizing the store into smaller, more manageable pieces.
The state.js file within this module defines the initial state, which includes information about whether a user is logged in and user informations. The mutations.js file contains functions that can modify the state of the module, and are responsible for updating the state in response to actions. The actions.js file defines the actions (login(), register(), logout()) that is dispatched to the store, which can trigger mutations. The index.js file is used to export the module's state, mutations, actions.

## views

Each component in the views folder represents a different page or view of this application.

Home.vue: We can see the 12 random meals and it does not require to login, all the other pages require to login. When the component is created, it calls a method called getRandomMeals() which retrieves the data for the random meals from the server using an Axios request. Then, the Meals component is rendered and passed the meals data as a prop to display the random meals to the user.

Ingredients.vue: This page displays a list of ingredients using data fetched from the API. The component has a template that renders a title, a container for the ingredients, and a card for each ingredient with a link to view meals that use that ingredient. The script section contains methods for fetching the data using Axios and storing it in the component's data.

Login.vue: It creates a login form with email and password inputs, a login button, and a signup button. When the user clicks the login button, the login() method is called, which dispatches a login action to the Vuex store with the loginForm data as the payload.
If the login action is successful, a success notification is displayed, and the user is redirected to the home page. If there is an error, such as an incorrect password or a user not found, an error notification is displayed.

MealDetails.vue: This page displays details about a meal, including its image, name, category, area, ingredients with their respective measures, instructions, and optional links to YouTube and a source website. The getMealDetails() method retrieves data from an API using the api.get() function with a specific ID passed as a parameter. The response from the API is then stored in the meal object.
After that, the method loops through the meal object and extracts the ingredients and measures by checking if the object keys include "strIngredient". If this condition is met, it splits the key using the "strIngredient" string and retrieves the ingredient number. Then, it adds the measure and ingredient to an array called ingredientsWithMeasures as an object with the measure and ingredient keys and display it.

MealsByIngredients: It displays meals based on a given ingredient. It uses the Loader component to display a loading animation while the meals are being fetched from the API. Once the meals are loaded, it checks if there are any meals available and displays a message if there are none. If there are meals available, it displays the Meals component and passes the meals data to it as a prop.
The component has a data object with two properties: meals and isLoaded. The meals property is an array that holds the meal data that is fetched from the API. The isLoaded property is a boolean that is used to determine whether the meals have finished loading or not.
The component has a mounted lifecycle hook that calls the getMealsByIngredients method. This method sends a GET request to the API with the ingredient parameter from the route. If the request is successful, the meals data is saved to the meals property. If the request fails, an error notification is displayed.

MealsByName.vue: This component provides a search bar for searching meals using the MealDB API.
It consists of an input element that binds to the search property using Vue binding (v-model). The watch hook is used to detect changes to the search property and initiate a search for meals with a one-second delay using a setTimeout function.
When the user types in the search bar, the component sends an HTTP request to the API with the search query using the axios library. The API's response is stored in the meals array and rendered using the Meals component.

Signup.vue: It creates a signup form with an email input, password input, and submit button. When the user submits the form, the register() method is called, which dispatches an action to register the user using the Vuex store. If the registration is successful, a success notification is shown and the user is redirected to the home page. If there is an error, an error notification is shown with a message based on the error code returned by Firebase. There is also a login button that redirects the user to the login page.

## App.vue

It contains a notifications component for displaying notifications and a router-view component, which is where the different views of this app will be rendered based on the current route.

## main.js

This file imports necessary packages and creates a Vue app with the root component App.vue. It also adds the necessary configuration for router and store. Additionally, it registers the FontAwesomeIcon component from the @fortawesome/vue-fontawesome package and adds the specified fab and fas icons to the fontawesome icon library. Also it configures this app to use the Notifications plugin. It mounts the root component to the app by calling the mount() method with the selector #app.

## tests/views

MealDetail.spec.js: This test is checking whether the MealDetails component is calling the api.get method with the correct argument when it is mounted.
The response object simulates the response from the API endpoint being tested. This object contains an array of meal objects that represent the data returned from the API.
The jest.mock function is used to mock the api module, replacing its get method with a mock function that returns a resolved Promise with the mocked response. This ensures that the test is not actually making real HTTP requests, but instead returns the mocked data.

MealsByName.spec.js: The first test case checks that the component emits the correct search value when the user types in the search input. It sets the value of the search input to "pizza" and asserts that the search data property of the component has been updated with this value.
The second test case checks that the component displays the correct meals when there are matching results from the API. It creates a mock response object containing an array of meal objects and mocks the api.get method to return this response when called. It then sets the search data property to "meal" and asserts that the Meals component exists. It uses setTimeout to wait for the API request to complete before checking that the meals data property contains the correct number of items and name.

## api.js

This is an Axios instance that is created with a base URL of "https://www.themealdb.com/api/json/v1/1/". The axios.create() method returns a new Axios instance that can be used to send HTTP requests with default configuration options. In this case, the baseURL option is set so that all requests sent with this instance will have this URL as their base. This is useful when you need to make multiple requests to the same API endpoint, as it avoids having to repeat the base URL in each request.

## jest.config.js

This is a Jest configuration file, used for configuring the behavior of the Jest test runner when running tests for a JavaScript or Vue.js project.

# Libraries, Frameworks, Platforms

- Vue.js (v3.2.13): Popular JavaScript framework for building user interfaces.
- Vue Router (v4.1.6): Routing library for Vue.js applications.
- Vuex (v4.1.0): State management library for Vue.js applications.
- Axios (v1.3.4): Promise-based HTTP client for the browser and node.js.
- Firebase (v9.17.1): Backend-as-a-service (BaaS) platform that provides tools and infrastructure to build web and mobile applications.
- Sass (v1.58.3): Preprocessor scripting language that is interpreted into CSS.
- Font Awesome (v6.3.0): Popular icon library with a vast collection of icons.
  Awesome icons.
- @kyvg/vue3-notification (v2.9.0): Vue.js component for displaying notifications.
- Vue Test Utils (v2.3.0): Utility library for testing Vue.js components.
- Jest (v26.6.3): Testing framework for JavaScript applications.
- @vue/test-utils (v2.3.0): Utility library for testing Vue.js components with Jest.
- @vue/cli-plugin-unit-jest (v5.0.8): Vue CLI plugin for Jest unit testing.
- @vue/vue3-jest (v26.0.1): Jest transformer for Vue.js 3 components.
- @vue/cli-service (v5.0.0): Command-line interface (CLI) for Vue.js projects that provides an easy way to configure and manage build tools and development servers.
- node-sass (v8.0.0): Library that provides binding for Node.js to LibSass, which is a Sass compiler written in C++.
- sass-loader (v13.2.0): Loader that compiles Sass to CSS and integrates with webpack, a popular JavaScript module bundler.
