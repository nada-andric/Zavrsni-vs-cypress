const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      "validEmail": "nada.andric19.na@gmail.com",
      "validPassword": "invazija19"
},
baseUrl:'https://cypress.vivifyscrum-stage.com/'
  },
});
