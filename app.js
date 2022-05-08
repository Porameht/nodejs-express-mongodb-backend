const express = require("express");
const chalk = require("chalk");
const PORT = process.env.PORT || 3000;
const debug = require("debug")("app");
const app = express();
const morgan = require("morgan");
const path = require("path");
const sessionsRouter = require("./src/routers/sessionRouter")


// app.use(morgan('combined'));
app.use(morgan("tiny"));

// app.use views index.html in public directory
app.use(express.static(path.join(__dirname, "/public/")));
 
app.set("views", "./src/views");
app.set("view engine", "ejs");



app.use("/sessions", sessionsRouter);

// exemple pass data
app.get("/", (req, res) => {
  // res.send("Hello Frank");
  res.render("index", { title: "Frank Home", data: ["a", "b", "c", "d"] });
});

app.listen(PORT, () => {
  // console.log(`Server port ${chalk.green(port)} is running...`);
  debug(`Server port ${chalk.green(PORT)} is running...`);
});
