import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { config, secrets } from "../../config/index";

Given("I open 'Login' page", () => {
  cy.visit(`${config.baseUrl}/claude/`); //visiting home page
  cy.url().should("be.eq", `${config.baseUrl}/login_page`); // checking if there's correct url
});

When("I verify the login form objects", () => {
  //checking the form container and objects
  cy.get(".login-container").should("exist");
  cy.get(".login-container").children("#logo").should("exist");
  cy.get(".login-container")
    .children("form[action='/login_page']")
    .should("exist");

  cy.get(".login-container")
    .children("footer")
    .should("exist")
    .and("contain", config.loginFooterText);

  // checking the login form objects
  cy.get(".login-container form[action='/login_page'")
    .children("input[name='username']")
    .should("exist");
  cy.get(".login-container form[action='/login_page'")
    .children("input[name='password']")
    .should("exist");

  cy.get(".login-container form[action='/login_page'")
    .children("button[type='submit']")
    .should("exist");
});

Then("I fill the username input with correct login", () => {
  //filling the login input with correct data and checking if it's filled
  cy.get(
    '.login-container form[action="/login_page"] input[name="username"]'
  ).click();
  cy.get(
    '.login-container form[action="/login_page"] input[name="username"]'
  ).type(secrets.userLogin);
  cy.get(
    '.login-container form[action="/login_page"] input[name="username"]'
  ).should("have.value", secrets.userLogin);
});

Then("I fill the username input with incorrect login", () => {
  //filling the login input with incorrect data and checking if it's filled

  cy.get(
    '.login-container form[action="/login_page"] input[name="username"]'
  ).click();
  cy.get(
    '.login-container form[action="/login_page"] input[name="username"]'
  ).type(secrets.randomIncorrectLogin);
  cy.get(
    '.login-container form[action="/login_page"] input[name="username"]'
  ).should("have.value", secrets.randomIncorrectLogin);
});

Then("I fill the password input with correct password", () => {
  //filling the password input with correct data and checking if it's filled
  cy.get(
    '.login-container form[action="/login_page"] input[name="password"]'
  ).click();
  cy.get(
    '.login-container form[action="/login_page"] input[name="password"]'
  ).type(secrets.userPassword);
  cy.get(
    '.login-container form[action="/login_page"] input[name="password"]'
  ).should("have.value", secrets.userPassword);
});

Then("I fill the password input with incorrect password", () => {
  //filling the password input with incorrect data and checking if it's filled
  cy.get(
    '.login-container form[action="/login_page"] input[name="password"]'
  ).click();
  cy.get(
    '.login-container form[action="/login_page"] input[name="password"]'
  ).type(secrets.randomIncorrectPassword);
  cy.get(
    '.login-container form[action="/login_page"] input[name="password"]'
  ).should("have.value", secrets.randomIncorrectPassword);
});

Then("I submit the login form", () => {
  //submitting the login form
  cy.get(
    '.login-container form[action="/login_page"] button[type="submit"]'
  ).click();
});

Then("I check the redirect to main page", () => {
  //check if there was redirect
  cy.url().should("include", `${config.baseUrl}/claude/`);
});

Then("I check the invalid credentials login error", () => {
  //check if there was an error message
  cy.url().should("include", `${config.baseUrl}/login_page`);
  cy.get(".login-container").children(".error-message").should("exist");
  cy.get(".login-container")
    .children(".error-message")
    .should("contain", config.loginInvalidCredsErrorText);
});
