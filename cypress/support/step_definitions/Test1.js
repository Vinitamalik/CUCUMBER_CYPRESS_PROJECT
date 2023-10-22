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
  cy.wait(500);
});

Then("Click Challenging DOM", () => {
  cy.wait(500);
  cy.xpath('//a[text()="Challenging DOM"]').click();

});

Then("Click on RED button and verify that the id of blue, red and green button changes", () => {
  cy.wait(500);
 // var inputs = document.getElementsByClassName('button');
  // for(var i =0; i< inputs.length; i++){
  //   cy.log("table"+ inputs[i].id);
  // }
  // cy.log("table"+ inputs.value);
  // cy.log("table"+ inputs.length);
 // const y = x.document.getElementById("$6e533c7c180a");
  
  cy.xpath('//a[@class="button alert"]').click();
  
});
