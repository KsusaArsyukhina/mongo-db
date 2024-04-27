const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const userRouter = require("./routes/users");
const categoriesRouter = require("./routes/categories");

const connectToDatabase = require("./database/connect");
const cors = require("./middlewares/cors");
const gamesRouter = require("./routes/games");

const app = express();
const PORT = 3000;

app.use(gamesRouter, userRouter, categoriesRouter);
app.use(express.static(path.join(__dirname, "public")));
app.use(cors, bodyParser.json());

connectToDatabase();

app.listen(PORT);
