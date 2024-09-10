// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import { config, secrets } from "../e2e/config/index";

Cypress.Commands.add("userLogin", (userLogin, userPassword) => {
  //   const user = USER_CREDENTIALS[userType];
  const userCreds = {
    login: userLogin || secrets.userLogin,
    password: userPassword || secrets.userPassword,
  };

  cy.visit(`${config.baseUrl}/claude/`);

  //typing login and password
  cy.get(
    '.login-container form[action="/login_page"] input[name="username"]'
  ).type(userCreds.login);
  cy.get(
    '.login-container form[action="/login_page"] input[name="password"]'
  ).type(userCreds.password);

  //clicking the login button
  cy.get(
    '.login-container form[action="/login_page"] button[type="submit"]'
  ).click();
});
