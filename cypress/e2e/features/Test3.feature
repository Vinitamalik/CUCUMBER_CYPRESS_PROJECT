@Test_3
Feature: Create and Delete a User

Scenario Outline: Create a User
Given POST API to create a User
When user should get response status code as <StatusCode>

    Examples:
       | StatusCode |
       | 200        | 

Scenario Outline: Delete the user
Given Delete API to delete above created User
When user should get response status code as <StatusCode>

    Examples:
       | StatusCode |
       | 200        | 



   
