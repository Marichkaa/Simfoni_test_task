Feature: Checking the Claude answers

    I want to check the Claude answers to the questions from the input

    Scenario: Checking the Claude answers
        Given I open the main page page
        When I verify the Claude input and button
        Then I fill the Claude input with a question
        Then I click the 'Send to Claude' button
        Then I check if the Claude answered correctly
