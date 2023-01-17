// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on("test:after:run", (test, runner) => {
    console.log("Can't have this called");
    unefinedVariable // it should just log an error to the console. Nothing happens
})

Cypress.on("test:before:run", (test, runner) => {
    console.log("It calls properly");
    unefinedVariable // it properly logs an error to the console before test run.
})