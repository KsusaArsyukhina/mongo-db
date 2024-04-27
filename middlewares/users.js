const users = require("../models/user");

const findAllUsers = async (req, res, next) => {
  const result = await users.find({});
  req.usersArray = result;
  console.log(result);
  next();
};

module.exports = findAllUsers;
