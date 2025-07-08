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

1. The *application* authenticates itself with Google.
   1. If successful then it can access the Admin SDK Directory API using OAuth2.
2. The application makes a request, via SDK users.get method, to the Admin SDK Directory API to get a user's information by their userKey (email or ID).
3. UNSURE: The application makes a request to check if a user is within an organization.
   1. The alternative would be the application makes this check using saved or recently retrieved organization info.

## Objective 2: User Interface

***[Documentation WIP]***

Develop an interface that allows user to interact with files inside the SOH Box account.

Constraints
: The solution must not require training or explanation for a user that is proficient with either Google Drive or Box.

## Objective 3: Proxy Functions

***[Documentation WIP]***

When a user does something in the user interface, their actions are performed on the actual Box account, i.e. uploading a file actually uploads a file, deleting a file actually deletes a file.

Constraints
: The solution must be able to replicate a user's actions 1:1 on the actual Box account.
