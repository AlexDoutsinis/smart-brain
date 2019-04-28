const express = require("express");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const cors = require("cors");

const register = require("./controllers/register");
const signin = require("./controllers/signin");
const profile = require("./controllers/profile");
const image = require("./controllers/image");

const knex = require("knex")({
  client: "pg",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "pass",
    database: "smart-brain"
  }
});

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json(database.users);
});

app.post("/signin", signin.handleSignin(knex, bcrypt));

app.post("/register", (req, res) =>
  register.handleRegister(req, res, knex, bcrypt)
);

app.get("/profile/:id", (req, res) => profile.handleProfileGet(req, res, knex));

app.put("/image", (req, res) => image.handleImage(req, res, knex));

app.post("/image-url", (req, res) => image.handleApiCall(req, res));

app.listen(3001, () => console.log("Server started at port 3001"));
