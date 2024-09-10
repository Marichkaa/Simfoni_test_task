import {
  Before,
  Given,
  Then,
  When,
} from "@badeball/cypress-cucumber-preprocessor";
import { config } from "../../config/index";

Before(() => {
  cy.userLogin(); //login precondition
});

Given("I open the main page page", () => {
  //visiting the main page and checking if redirect is correct

  cy.visit(`${config.baseUrl}/claude/`);
  cy.url().should("include", `${config.baseUrl}/claude/`);
});

When("I verify the Claude input and button", () => {
  //checking if the claude input and button exist

  cy.get("#userInput").should("exist");
  cy.get("#userInput")
    .siblings("button[onclick='sendBedrockRequest()']")
    .should("exist");
});

Then("I fill the Claude input with a question", () => {
  //filling the input with the question from config file

  cy.get("#userInput").click();
  cy.get("#userInput").type(config.claudeCheck.mathQuestion);
  cy.get("#userInput").should("have.value", config.claudeCheck.mathQuestion);
});

Then("I click the 'Send to Claude' button", () => {
  //clicking the send to claude button

  cy.get("#userInput")
    .siblings("button[onclick='sendBedrockRequest()']")
    .click();
});

Then("I check if the Claude answered correctly", () => {
  //checking if the answer div exists and have needed value

  cy.get("#userInput").siblings("#responseContent").should("exist");
  cy.get("#userInput")
    .siblings("#responseContent")
    .should("have.text", config.claudeCheck.mathAnswer);
});
