// add the dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const expressValidator = require("express-validator");

// get the configurations
const config = require("./config/db");

// get the router of registeration
const register = require("./routers/register");

// init the app
const app = express();

// config the db
mongoose.connect(config.db, { useNewUrlParser: true, useFindAndModify: false });
// get the state of the connection
let db = mongoose.connection;
db.once("open", () => {
  console.log("connected to db");
}).on("error", err => {
  console.log(err);
});

// set the view engine
app.set("view engine", "pug");

// init body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set the public folder
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.render('register');
});

// get the member model
const Member = require('./models/member');

// set the routing of the dashboard
app.get('/dashboard', (req, res) => {
  Member.find({}).then((members, err) => {
    if (err) console.log(err);

    // get the result and render the dashboard
    res.render('dashboard', {members});
  })
})

// set the register router
app.use("/register", register);

// make the port dynamically set
const PORT = process.env.PORT || 3000;
// listen to the port
app.listen(PORT, () => {
  console.log(`app is listining on port ${PORT}`);
});
