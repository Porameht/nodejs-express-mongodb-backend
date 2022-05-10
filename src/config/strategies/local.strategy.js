const MongoClient = require("mongodb/lib/mongo_client");
const passport = require("passport");
const { Strategy } = require("passport-local");
const debug = require("debug")("app:localStrategy");

module.exports = function localStrategy() {
  passport.use(
    new Strategy(
      {
        usernameField: "username",
        passwordField: "password",
      },
      (username, password, done) => {
        const url =
          "mongodb+srv://porameht:cFxj2BFCwUuEVapA@nodejs-globomantics.iymsi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
        const dbName = "nodejs-globomantics";

        (async function validateUser() {
          let client;
          try {
            client = await MongoClient.connect(url);
            debug("Connected to the mongoDB");
            const db = client.db(dbName);

            const user = await db.collection("users").findOne({ username });

            if (user && user.password === password) {
              done(null, user);
            } else {
              done(null, false);
            }
          } catch (error) {
            done(error, false);
          }
          client.close();
        })();
      }
    )
  );
};
