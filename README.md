# :t-rex:  nodejs-express-mongodb-webapp

>project preview
<img width="1007" alt="Screen Shot 2565-05-11 at 12 08 05" src="https://user-images.githubusercontent.com/89307294/167777529-bd558470-bd99-4e40-87bf-9d40f93d8725.png">


>certificate 
<img width="985" alt="Screen Shot 2565-05-11 at 12 20 34" src="https://user-images.githubusercontent.com/89307294/167777536-b5c7e522-efc4-4244-9108-89cf32dca594.png">

***:books: 1. The first page***
  - setting up express
  - running express
  - debugging option :floppy_disk:
    ```
    require('chalk')
    require('morgan')
    require('debug')
    ```  
  - serving HTML index.js

***:books:2. Setting up Tooling***
  - npm script :floppy_disk:
    `"start": "node app.js"`
  - nodemon :floppy_disk:
    `"start": "nodemon app.js"`
    - nodemon config in package.json :floppy_disk:
      ```
      "nodemonConfig": {
      "restartable": "rs",
      "delay": 2500,
      "env":{
        "PORT":4000
      }
      ```
  - environmental variables :floppy_disk:
    `const PORT = process.env.PORT || 3000` 

***:books:3. Templating Engines***
  - templating engines
  - passing data to a page by ejs
  - working with a template HTML CSS

***:books:4. using routing to build multiple pages***
  - building a web application
  - building routes for application
  - separating files
  - parameter variable :floppy_disk:
    ```
    sessionsRouter.route("/:id").get((req, res) => {
    const id = req.params.id;
    res.render("session", {
      session: sessions[id],
    });
    ```
***:books:5. connecting to a database (nosql)***
  - setting mongodb :floppy_disk:
    ```
    https://cloud.mongodb.com/ => {name: "nodejs-globomantics"}
    npm install mongodb
    const { MongoClient } = require("mongodb");
    ```
  - using mongodb :floppy_disk:
    ```
    const url =
    "mongodb+srv://<user>:<password>@nodejs-globomantics.iymsi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
    const dbName = "nodejs-globomantics";
    ```
  - inserting data :floppy_disk:
    ```
    const response = await db.collection('sessions').insertMany(sessions);
    res.json(response);
    ```
  - querying data
    - selecting sessions :floppy_disk:
    ```
    const sessions = await db.collection("sessions").find().toArray();
    res.render("sessions", { sessions });
    ```
    - selecting one session :floppy_disk:
    ```
    const session = await db.collection("sessions").findOne({ _id: new ObjectID(id) });
    res.render("session", { session });
    
    ```
