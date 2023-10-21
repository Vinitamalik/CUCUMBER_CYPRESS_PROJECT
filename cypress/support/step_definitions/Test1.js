//import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
require("cypress-xpath");
const {
  Given,
  When,
  Then,
  And,
} = require("@badeball/cypress-cucumber-preprocessor");

Given("Navigate to the URL", () => {
  cy.visit("https://the-internet.herokuapp.com/");
  cy.log("user logged-in");
});

Then("Click Challenging DOM", () => {
  cy.wait(500);
  cy.get('a[href*="/challenging_dom"]').click();
});

Then("Click on RED button and verify that the id of blue, red and green button changes", () => {
  cy.wait(500);
  var table = cy.xpath('//div[@class="large-2 columns"]');
  cy.log("table"+ table);
  cy.xpath('//a[@class="button alert"]').click();
  
});
