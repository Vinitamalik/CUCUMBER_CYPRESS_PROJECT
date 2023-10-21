//import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const {
  Given,
  When,
  Then,
  And,
} = require("@badeball/cypress-cucumber-preprocessor");

Given("Navigate to the URL", () => {
  // cy.visit("https://the-internet.herokuapp.com/");
  cy.log("user");
});

Then("Click Challenging DOM", () => {
  cy.wait(500);
  cy.get("//a[@href='/challenging_dom']").click();
});
