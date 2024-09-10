Feature: Logging in to the AITemizer account

    I want to log in to the AITemizer account

    Scenario: Logging in to the AITemizer with correct data
        Given I open 'Login' page
        When I verify the login form objects
        Then I fill the username input with correct login
        Then I fill the password input with correct password
        Then I submit the login form
        Then I check the redirect to main page

    Scenario: Logging in to the AITemizer with incorrect data
        Given I open 'Login' page
        When I verify the login form objects
        Then I fill the username input with incorrect login
        Then I fill the password input with incorrect password
        Then I submit the login form
        Then I check the invalid credentials login error
