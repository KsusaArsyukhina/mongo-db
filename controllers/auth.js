// controllers/auth.js
const jwt = require("jsonwebtoken");

const users = require("../models/user.js");
// controllers/auth.js

const login = (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  console.log(password);
  users
    .findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, "some-secret-key", {
        expiresIn: 3600,
      });
      return { user, token };
    })
    .then(({ user, token }) => {
      res.status(200).send({
        _id: user._id,
        username: user.username,
        email: user.email,
        jwt: token,
      });
    })
    .catch((error) => {
      res.status(401).send({ message: error.message });
    });
};

// Не забываем экспортирвать функцию
module.exports = { login };
