# getaways-backend
Backend repo | Getaways.guru

## Developer
Juli Ramon

## Link to the app
[Getaways.guru](#)

## Description

Getaways.guru is a discovery platform where community members can search, book and share their most loved getaways, places, experiences and stories.

## Epics

- **Signup**
- **Login**
- **Access to the user feed**
- **Access to the user profile**
- **Promote a getaway**
- **Promote an experience**
- **Publish an story**
- **Search content**

## User Stories

- **Home offpage**: As a user I want to be able to access the home offpage to see how the app works, check the list of getaways, places, experiences and stories listed, and have access to the login and signup options
- **Sign up**: As a user I want to sign up –either with my email or my Google or Facebook account– to the app to create my personal account to search, book and publish content
- **Log in**: As a user I want to be able to log in to the app to access and manage my personal account
- **Log out**: As a user I want to be able to log out from the app so that no one else has access to my account
- **Home onpage (Feed)**: As a user I want to be able to access the home onpage -personal feed- to get recommended results and search for content
- **User profile**: As a user I want to be able to access my user profile to manage my content and account details
- **Content lists**: As a user I want to be able to see content lists –getaways, places, experiences and stories– to read before booking or executing an action
- **Content creation**: As a user I want to be able to promote/publish new content -getaways, places, experiences and stories- so that others can read them as well as to get more clients to my property

## Backlog
List of extra features not included in the MVP:

- **Search**: As a user I want to be able to use the app browser to search for content and get dedicated results based on my queries
- **Advanced search**: As a user I want to be able to apply additional filters to my search to improve my queries
- **Save content**: As a user I want to be able to save content to my "Saved content" list
- **Geo location**: As a user I want to be able to search and get custom recommendations base on my location
- **Book getaways**: As a user I want to be able to book available getaways

## Routes

|Method|URL|Description.                                                  |
|------|------------|-----------------------------------------------------|
|POST  |/auth/signup|Redirects to /home if the user successfully signs up |
|POST  |/auth/login |Redirects to /home if the user successfully logs in  |
|POST  |/auth/logout|Redirects to /                                       |
|POST  |/getaways   |Creates a new getaway to the database                |
|GET   |/getaways   |Retreives the list of getaways from the database     |
|GET   |/getaways/id|Retreive the details of the getaway from the database|
|PUT   |/getaways/id|Updates the details of the getaway in the database   |
|DELETE|/getaways/id|Removes the getaways from the database               |

## Models
### User model
- **username**: String
- **password**: String
- **email_address**: String
- **avatar**: String
- **bio**: String
- **description**: String
- **getaways**: Array
- **stories**: Array
### Getaway model
- **title**: String
- **summary**: String
- **owner**: String
- **pictures**: Array
- **rating**: String
- **location**: String
- **price**: Number
- **total_time**: Number
- **featured**: Boolean
### Story model
- **title**: String
- **Summary**: String
- **owner**: String
- **pictures**: Array
- **read_time**: Number
- **featured**: Boolean

## Wireframes
- [Excalidraw](https://excalidraw.com/#json=5202385194450944,ItMtODZ9uvL91BZOFA31vg)

## Links
- [Frontend Repo](https://github.com/juliramon/getaways-frontend)
- [Heroku](#)
- [Trello](#)
- [Slides](#)
