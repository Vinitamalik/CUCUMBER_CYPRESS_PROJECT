require("cypress-xpath");
const {
  Given,
  When,
  Then,
  And,
} = require("@badeball/cypress-cucumber-preprocessor");

var apiStatusCode;
var apiResponse;
var User_id;

// Test 1
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

    if (cy.xpath('//a[@class="button alert"]').click()) {
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
  }
);

//Test 2

Then("Click Dynamic Loading", () => {
  cy.xpath('//a[text()="Dynamic Loading"]').click();
});

Then("Click on Element rendered after the fact", () => {
  cy.xpath('//a[text()="Example 2: Element rendered after the fact"]').click();
});



Then(
  "Click on Start Button to load the bar and verify that the text should be display as Hello World",
  () => {
    cy.xpath('//button[text()="Start"]').click();
    if(cy.xpath('//div[text()="Loading... "]').should("be.visible"))
    {
    cy.wait(1200);
    cy.xpath('//div[text()="Loading... "]').should("not.be.visible");
    cy.xpath('//h4[text()="Hello World!"]').should("be.visible");
       
    } 
    
   
  }
  
);

//Test 3
Given("POST API to create a User", () => {
  cy.request({
    method: "POST",
    url: "https://dummy.restapiexample.com/api/v1/create",
    failOnStatusCode: false,
    body: {

    }
}).then((response) => {
  cy.log(response.status);
  cy.log(response.body);
  apiResponse= response.body;
  apiStatusCode=response.status;
  var jsonResponse = JSON.stringify(apiResponse);
  const parsedBody = JSON.parse(jsonResponse); //
  cy.log("jsonResponse=" + jsonResponse);
  User_id =apiResponse.data.id;
  cy.log("user_id" + User_id);
});
});

When("user should get response status code as {int}", (StatusCode) => {
  expect(StatusCode).to.equal(apiStatusCode);
});

//Test 4
Given("Delete API to delete above created User", () => {

  cy.log("Delete API to delete above created User" + User_id);
  cy.request({
    method: "DELETE",
    url: "https://dummy.restapiexample.com/api/v1/delete/" + User_id,
    failOnStatusCode: false,
    body: {

    }
}).then((response) => {
  cy.log(response.status);
  cy.log(response.body);
  apiResponse= response.body;
  apiStatusCode=response.status;
  var jsonResponse = JSON.stringify(apiResponse);
  const parsedBody = JSON.parse(jsonResponse); 
  cy.log("jsonResponse=" + jsonResponse);

});
});


