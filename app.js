const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const connectToDatabase = require("./database/connect");
const { cors } = require("./middlewares/cors");
const apiRouter = require("./routes/apiRouter");
const cookieParser = require("cookie-parser");
const pagesRouter = require("./routes/pages");

const app = express();
const PORT = 3001;
app.use(cors, cookieParser(), bodyParser.json(), pagesRouter, apiRouter);

app.use(express.static(path.join(__dirname, "public")));

connectToDatabase();

app.listen(PORT);
