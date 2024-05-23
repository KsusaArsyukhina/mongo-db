const path = require("path");
const jwt = require("jsonwebtoken");

const sendIndex = (req, res) => {
  console.log(req.cookies.jwt);
  if (req.cookies.jwt) {
    try {
      jwt.verify(req.cookies.jwt, "some-secret-key");
      return res.redirect("/admin/dashboard");
    } catch (err) {
      res.sendFile(path.join(__dirname, "../public/index.html"));
    }
  } else res.sendFile(path.join(__dirname, "../public/index.html"));
};
// Другие функции-контроллеры

const sendDashboard = (req, res) => {
  res.sendFile(path.join(__dirname, "../public/admin/dashboard.html"));
};
module.exports = { sendIndex, sendDashboard };
