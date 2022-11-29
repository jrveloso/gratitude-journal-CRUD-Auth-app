# Gratitude Journal CRUD App
A simple app that can Create, Read, Update, Delete documents from a database.

https://gratitude-journal-crud-app.herokuapp.com/

![Screenshot](gratitude-journal.png)

## How It's Made:

**Tech used:** CSS, JavaScript, Node, Express, MongoDB, Mongoose, EJS, Passport.js
**Backend:** I structured my application using an MVC structure because it provided a high level of organization, making it easier to debug, maintain and add new features. I chose Node for the backend language because I'm familiar with JavaScript, while the addition of Express made it easier to build out my api and drop in middleware like Passport for authentication. MongoDB as a NoSQL database worked well for holding the journal entry data I wanted users to be able to store. I used Mongoose in conjunction with Mongo to provide schema validation. To template the pages, I used EJS because the syntax was essentially JavaScript (familiarity) on top of HTML with a few different quirks.
**Frontend:** I opted for a simple frontend using CSS and vanilla JavaScript to allow the focus to be on the user practicing daily gratitude.

## Lessons Learned:
I familiarized myself with a couple of templating languages (EJS and Handlebars) and learned the simplicity of EJS syntax in creating dynamic web pages for users. I learned how to add authentication to an application via Passport.js, hashing via BCrypt, to keep user data private and secure. My appreciation of the MVC architecture grew as I debugged and adding features, making it easier to find things and fix pieces without breaking other parts of the code. I read through Mongoose and MongoDB documents and gained more insight into how Mongoose makes storing data so much easier in MongoDB with schema validation. I also was able to deploy the application via Heroku and Render, two cloud based hosting services.

## Optimizations:
I'd like to rebuild this application into a single page app using React.js. I'd also like to allow users to pick their own color theme for their gratitude journal.