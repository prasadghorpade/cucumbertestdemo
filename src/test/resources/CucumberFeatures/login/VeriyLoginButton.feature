
@tag
Feature: Verify that login button is present on home page
  

  @tag1
  Scenario Outline: Vrification of login button
    Given I have open the browser
    When I open website "(URL)"
    Then Login button should exits
    #Then Move the mouse on login button
    #And  Move the mouse on SpiceClubMembers
    #And  Move the mouse on SignUp link
    #Then Verify that sign up page gets open
     

   		Examples: 
      | URL                      |
      | http://www.spicejet.com/ |
      
