const express = require('express');
const sessionsRouter = express.Router();
const sessions = require('../data/sessions.json')


// learn more page 
sessionsRouter.route("/").get((req, res) => {
    res.render("sessions", {
      sessions,
    });
  });
  
  // single page
  sessionsRouter.route("/:id").get((req, res) => {
    const id = req.params.id;
    res.render("session", {
      session: sessions[id],
    });
  });

  module.exports = sessionsRouter;
  