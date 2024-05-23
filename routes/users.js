const usersRouter = require("express").Router();

const {
  sendAllUsers,
  sendUserCreated,
  sendUserById,
  sendUserUpdated,
  sendUserDeleted,
  sendMe,
} = require("../controllers/users");
const { checkAuth } = require("../middlewares/auth");
const {
  findAllUsers,
  createUser,
  findUserById,
  updateUser,
  deleteUser,
  checkEmptyNameAndEmailAndPassword,
  checkEmptyNameAndEmail,
  filterPassword,
  hashPassword,
} = require("../middlewares/users");

usersRouter.get("/me", checkAuth, sendMe);
usersRouter.get("/users", findAllUsers, filterPassword, sendAllUsers);
usersRouter.get("/users/:id", findUserById, filterPassword, sendUserById);
usersRouter.post(
  "/users",
  findAllUsers,
  checkEmptyNameAndEmailAndPassword,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated
);

usersRouter.put(
  "/users/:id",
  findUserById,
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser,
  sendUserUpdated
);
usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);

module.exports = usersRouter;
