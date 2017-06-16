# PwReminder

![alt text](https://user-images.githubusercontent.com/26203818/27227140-33cdc06a-5270-11e7-9f27-7c69e4f7fee3.png)

![alt text](https://user-images.githubusercontent.com/26203818/27227063-d4259dea-526f-11e7-8c1d-0126aa9a1d7d.png)

## User Stories
1. As a user, I want to be able to sign up for an account with automatic sign in.
2. As a user, I want to be able to change my password.
3. As a user, I want to be able to sign out of my account.
4. As a user, I want to be able to create a card in my account that specifies what website or application that I would like to remember the password for.
5. As a user, I want to be able to add the email address or username I signed up with to the corresponding site/app.
6. As a user, I want to be able to add the password that matches the corresponding username/email that I signed up with.
7. As a user, I want to be able to edit individual cards.
8. As a user, I want to be able to delete individual cards.
9. As a user, I want to be able to see all of the cards that I have created.

## Wireframes
http://imgur.com/a/L8ToL

## Technologies Used
-    JavaScript
-    jQuery
-    AJAX
-    Handlebars
-    Bootstrap
-    HTML/CSS
-    Ruby on Rails

## General Approach
Created user stories, wireframes, and ERD. Studied documentation on encryption and Ruby on Rails. Went slowly through setting up heroku, browser template, and rails template. Created API in Rails and implemented encryption when the user saved one of their Cards, also added curl scripts to test and made it so that only the current user can see their own cards. Built front-end and added simple html forms to test CRUD actions. After that, I added bootstrap and handlebards to display the data and html in a more appealing way.

## Unsolved Problems
I figured out how to encrypt the password input data using Rails built in message encryptor, but did not have enough time to implement the decryptor method for the user, displaying a hidden password that they could copy and paste into the websites that they are using. Also, I would like to spend more time on the styling.

## Links
-    [Deployed Front End](https://mlynnes.github.io/capstone-front-end)
-    [Deployed API](https://thawing-plateau-88644.herokuapp.com)
-    [API Repository](https://github.com/mlynnes/capstone-api)


## Installation
- npm install
