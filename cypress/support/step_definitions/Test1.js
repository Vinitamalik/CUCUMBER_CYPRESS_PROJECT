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
  cy.xpath('//a[text()="Challenging DOM"]').click();
});

Then(
  "Click on RED button and verify that the id of blue, red and green button changes",
  () => {
    cy.wait(500);
    let RED_ID; 
    cy.xpath('//a[@class="button alert"]')
      .invoke("attr", "id")
      .then((id) => {
        RED_ID = id;
        return Cypress.env(RED_ID);
      });
      cy.then(() => {
      cy.log("Returned RED_ID :" + `${RED_ID}`);
    });

    cy.wait(500);
    let Blue_ID; 
    cy.xpath('//a[@class="button"]')
      .invoke("attr", "id")
      .then((id) => {
        Blue_ID = id;
        return Cypress.env(Blue_ID);
      });
      cy.then(() => {
      cy.log("Returned Blue_ID :" + `${Blue_ID}`);
    });

    cy.wait(500);
    let Green_ID; 
    cy.xpath('//a[@class="button success"]')
      .invoke("attr", "id")
      .then((id) => {
        Green_ID = id;
        return Cypress.env(Green_ID);
      });
      cy.then(() => {
      cy.log("Returned Green_ID :" + `${Green_ID}`);
    });

   if(cy.xpath('//a[@class="button alert"]').click()){
    let RED_ID_after_click; 
    cy.xpath('//a[@class="button alert"]')
      .invoke("attr", "id")
      .then((id) => {
        RED_ID_after_click = id;
        return Cypress.env(RED_ID_after_click);
      });
      cy.then(() => {
      cy.log("Returned RED_ID after_click :" + `${RED_ID_after_click}`);
      expect(`${RED_ID_after_click}`).not.to.equal(`${RED_ID}`);
    });

    cy.wait(500);
    let Blue_ID_after_click; 
    cy.xpath('//a[@class="button"]')
      .invoke("attr", "id")
      .then((id) => {
        Blue_ID_after_click = id;
        return Cypress.env(Blue_ID_after_click);
      });
      cy.then(() => {
      cy.log("Returned Blue_ID after_click :" + `${Blue_ID_after_click}`);
      expect(`${Blue_ID_after_click}`).not.to.equal(`${Blue_ID}`);
    });


    cy.wait(500);
    let Green_ID_after_click; 
    cy.xpath('//a[@class="button success"]')
      .invoke("attr", "id")
      .then((id) => {
        Green_ID_after_click = id;
        return Cypress.env(Green_ID_after_click);
      });
      cy.then(() => {
      cy.log("Returned Green_ID after_click :" + `${Green_ID_after_click}`);
      expect(`${Green_ID_after_click}`).not.to.equal(`${Green_ID}`);
    });
   
   }
    });
