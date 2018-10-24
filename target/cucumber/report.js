$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login and Sign up",
  "description": "",
  "id": "login-and-sign-up",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Verify thet user is able to sign up",
  "description": "",
  "id": "login-and-sign-up;verify-thet-user-is-able-to-sign-up",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I open website \"\u003cURL\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Login button should exits",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "login-and-sign-up;verify-thet-user-is-able-to-sign-up;",
  "rows": [
    {
      "cells": [
        "URL"
      ],
      "line": 10,
      "id": "login-and-sign-up;verify-thet-user-is-able-to-sign-up;;1"
    },
    {
      "cells": [
        "http://www.spicejet.com/"
      ],
      "line": 11,
      "id": "login-and-sign-up;verify-thet-user-is-able-to-sign-up;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Verify thet user is able to sign up",
  "description": "",
  "id": "login-and-sign-up;verify-thet-user-is-able-to-sign-up;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "I have open the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I open website \"http://www.spicejet.com/\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "Login button should exits",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});