const express = require("express");
const app = express();
const User = require("./models/user.model");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/test", (req, res) => {
  res.json({ message: "testing get endpoint!" });
});

app.get("/users", (req, res) => {
  let users = [
    {
      name: "abiodun",
      password: "sjsksjslsk",
    },
  ];
  return res.json({ message: "All users", AllUsers: users });
});

app.post("/signup", async (req, res) => {
  const { name, email } = req.body;
  const newUser = new User({ name, email });
  const user = await newUser.save();
  res.status(201).json(user);
});

module.exports = app;
