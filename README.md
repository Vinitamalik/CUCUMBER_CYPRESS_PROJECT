## I used Cypress Cucumber BDD framework to create the scripts using JavaScripts.
## Please find below the tests descripts and related files and I added the screenshots also during the execution for the reference.

1. Test 1 :
Navigate to https://the-internet.herokuapp.com/
Click Challenging DOM
Confirm that the blue, red, and green button ids change after the red button is clicked

1a.  Feature file for Test1

Cypress -> e2e -> features -> Test1.feature

1b. Step_defintion file: Contain the logic under :
Cypress -> support -> step_definition -> Tests_step.js

## notes : I executed the Test1 and added the screen shots under for the reference: 'CUCUMBER_CYPRESS_PROJECT\Test Results\Test_1_Results.docx'


2. Test 2:
Navigate to https://the-internet.herokuapp.com/
Click Dynamic Loading
Click Example 2: Element rendered after the fact
Confirm 'Hello World!' is rendered after the loading bar disappears

1a.  Feature file for Test2

Cypress -> e2e -> features -> Test2.feature

1b. Step_defintion file: Contain the logic under :
Cypress -> support -> step_definition -> Tests_step.js

## notes : I executed the Test1 and added the screen shots under for the reference: 'CUCUMBER_CYPRESS_PROJECT\Test Results\Test2.docx'

3. Test 3 and 4:
POST to the http://dummy.restapiexample.com/ create route and verify you receive a
response that indicates that a user was made.

Delete the user created in the above test

1a.  Feature file for Test2

Cypress -> e2e -> features -> Test3andTest4.feature

1b. Step_defintion file: Contain the logic under :
Cypress -> support -> step_definition -> Tests_step.js

## notes : I executed the Test1 and added the screen shots under for the reference: 'CUCUMBER_CYPRESS_PROJECT\Test Results\Test3 and 4.docx'

## The APIs were giving 429 error as intermittent due to the API performce. I managed to take the screenshots somehow.

## the login contains as : Created the user first then deleted the same user.


1. Installation Process

Install the below plugins by running commands:

## To install cypress:
npm install cypress --save-dev

## To install cucumber: 
npm install @badeball/cypress-cucumber-preprocessor --save-dev
npm install @bahmutov/cypress-esbuild-preprocessor --save-dev

Do the following setting in .cypress-cucumber-preprocessorrc.json:
{
  "stepDefinitions": [
    "cypress/e2e/step_definitions/*.{js,ts}"
  ]
}

do the following setting in cypress.config.js:

const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}







