const express = require("express");
const { MongoClient, ObjectID } = require("mongodb");
const sessionsRouter = express.Router();
const debug = require("debug")("app:sessionRouter");
const speakerService = require("../services/speakerService");
// const sessions = require("../data/sessions.json");
sessionsRouter.use((req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect("/auth/signIn");
  }
});

// learn more page
sessionsRouter.route("/").get((req, res) => {
  const url =
    "mongodb+srv://porameht:cFxj2BFCwUuEVapA@nodejs-globomantics.iymsi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const dbName = "nodejs-globomantics";

  (async function mongo() {
    let client;
    try {
      client = await MongoClient.connect(url);
      debug("Connected to the mongoDB");

      const db = client.db(dbName);

      const sessions = await db.collection("sessions").find().toArray();
      res.render("sessions", { sessions });
    } catch (error) {
      debug(error.stack);
    }
    client.close();
  })();
});

// single page
sessionsRouter.route("/:id").get((req, res) => {
  const id = req.params.id;
  const url =
    "mongodb+srv://porameht:cFxj2BFCwUuEVapA@nodejs-globomantics.iymsi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const dbName = "nodejs-globomantics";

  (async function mongo() {
    let client;
    try {
      client = await MongoClient.connect(url);
      debug("Connected to the mongoDB");

      const db = client.db(dbName);

      const session = await db
        .collection("sessions")
        .findOne({ _id: new ObjectID(id) });

      // service speaker api
      const speaker = await speakerService.getSpeakerById(
        session.speakers[0].id
      );
      session.speaker = speaker.data;

      res.render("session", {
        session,
      });
    } catch (error) {
      debug(error.stack);
    }
    client.close();
  })();
});

module.exports = sessionsRouter;
