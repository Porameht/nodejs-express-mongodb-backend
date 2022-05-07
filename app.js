const express = require("express");
const chalk = require("chalk");
const PORT = process.env.PORT || 3000;
const debug = require('debug')('app');
const app = express();
const morgan = require('morgan');
const path = require('path');

// app.use(morgan('combined'));
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname,'/public/')));


app.get("/", (req, res) => {
  res.send("Hello Frank");
});

app.listen(PORT, () => {
  // console.log(`Server port ${chalk.green(port)} is running...`);
  debug(`Server port ${chalk.green(PORT)} is running...`);
});
