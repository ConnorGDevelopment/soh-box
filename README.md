# SOH Box Solution

## Purpose and Requirements

Enable SOH employees and select individuals to upload files to the SOH Box account without everyone having full access to the SOH Box account.

Overall Constraints
: The solution should maintain the same level of ergonomics and practicality as similar upload services, ex. Google Drive.
: The solution should be designed in such a way that it avoids 'Only God knows now' scenarios where it is only functional/maintainable/modifiable in the presence of the original developer.
: The solution should not generate work on behalf of another employee/team/department/etc. as part of its normal operation.

## Objective 1: Access Control

Restrict application functions to SOH employees and guests.

Constraints
: The solution should be scalable to any number of employees or guests.
: The solution must have some way to prevent a stranger or bad actor from uploading to Box.
: The solution must not require employees to remember another set of login credentials.
: The solution must not require IT to manually generate new accounts for employees.

### Current Plan: Google Workspace

SOH currently uses Google Workspace for employee emails, using Google accounts for authorization ensures scalability and offloads account management.

Process Steps:

The web app needs to perform an OAuth2.0 request using the [Authorization Code](https://developers.google.com/identity/oauth2/web/guides/use-code-model) method.

1. The web app makes a request to Google's OAuth 2.0 server to start a user data permission request which opens a modal where the user is prompted for consent to access their data. The response is then sent from Google to the server.
   1. The only information obtained by the web app is the user's email address, unique identifier, name, and organization membership, no other user information is ever obtained by the web app. Only the unique identifier and organization membership are actually used in web app's function.
2. The server validates the response by checking the following:
   1. The response is a legitimate response from Google.
      1. The primary security concern here is Cross Site Request Forgery (CSRF). More specifically, the concern is that a bad actor could just send a response to the web app that looks like its from Google and gain access.
   2. The user is a member of the stuartsoperahouse\.org Google Workspace.
      1. How to achieve Guest access is TBD.
   3. The user approved the permissions requested by the web app.
3. If the response is successfully validated, then the user is directed to the actual web app.

All of these steps are handled by [@sidebase/nuxt-auth](https://auth.sidebase.io) library. It comes with a preconfiguration for Google Authentication and by default applies CSRF protection on sign-in and sign-out routes in addition to utilizing Google's state parameter on API calls.

### Implementation Checklist

- [X] Login Page w/ Google Sign-in Button (Functionality Only)
- [X] Route Guard Middleware
- [X] Server Auth Endpoint and Validation
  
## Objective 2: Proxy Functions

***[Documentation WIP]***

When a user does something in the user interface, their actions are performed on the actual Box account, i.e. uploading a file actually uploads a file, deleting a file actually deletes a file.

Constraints
: The solution must be able to replicate a user's actions 1:1 on the actual Box account.

### Current Plan: JWT Authentication with Box

To get access to the Box instance, the web app must authenticate using the JWT method. The CCG method does not work because the service worker account in that method is unable to gain access to the same file system as users, despite having admin authority.

## Objective 3: User Interface

***[Documentation WIP]***

Develop an interface that allows user to interact with files inside the SOH Box account.

Constraints
: The solution must not require training or explanation for a user that is proficient with either Google Drive or Box.