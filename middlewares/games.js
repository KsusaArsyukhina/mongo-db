const games = require("../models/game");

const findAllGames = async (req, res, next) => {
  const result = await games.find({}).populate("categories").populate("users");
  req.gamesArray = result;

  next();
};

module.exports = findAllGames;
