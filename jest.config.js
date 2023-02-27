module.exports = {
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {},
  moduleFileExtensions: ['js', 'json', 'vue'],
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.vue$': '@vue/vue3-jest'
  },
  transformIgnorePatterns: ["/node_modules/(?!axios)"],
}