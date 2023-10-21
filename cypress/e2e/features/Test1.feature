@Tests
Feature: Validate Tests

  Scenario: Navigate to the URL and verify the Ids changed after click on Red button
    Given Navigate to the URL
    Then Click Challenging DOM
    Then Click on RED button and verify that the id of blue, red and green button changes

