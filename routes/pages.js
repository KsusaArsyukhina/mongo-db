const { sendIndex, sendDashboard } = require("../controllers/pages");
const { checkAuth, checkCookiesJWT } = require("../middlewares/auth.js");

const pagesRouter = require("express").Router();

pagesRouter.get("/", sendIndex);

pagesRouter.get("/admin/**", checkCookiesJWT, checkAuth, sendDashboard);
module.exports = pagesRouter;
