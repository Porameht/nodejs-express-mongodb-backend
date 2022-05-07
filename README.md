# nodejs-express-mongodb-webapp

***1. The first page***
  - setting up express
  - running express
  - debugging option
    - `require('chalk')`
    - `require('morgan')`
    - `require('debug')`
  - serving HTML index.js

***2. Setting up Tooling***
  - npm script
    - `"start": "node app.js"`
  - nodemon
    - `"start": "nodemon app.js" `
    - nodemon config in package.json
      ```
      "nodemonConfig": {
      "restartable": "rs",
      "delay": 2500,
      "env":{
        "PORT":4000
      }
      ```
  - environmental variables
    - `const PORT = process.env.PORT || 3000` 

***3.Templating Engines***
  - templating engines
  - passing data to a page by ejs
  - working with a template HTML CSS
