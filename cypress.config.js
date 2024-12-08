const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    specPattern: "cypress/e2e/*.cy.{js,jsx,ts,tsx}",
    supportFile: "cypress/support/e2e.js",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      allureWriter(on, config);
      return config;
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    retries: {
      runMode: 2,
      openMode: 0,
    },
    video: true,
    screenshotOnRunFailure: true,
  },
});
