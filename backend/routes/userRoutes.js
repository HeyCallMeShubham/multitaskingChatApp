
const express = require("express");
const { login, register, searchUsers, fetchSingleUserProfile } = require("../controllers/userController");

const userRouter = express.Router();





userRouter.post("/register", register);

userRouter.post("/login", login);

userRouter.get("/fetchsingleuser/:userid", fetchSingleUserProfile);

userRouter.get("/search/searchusers", searchUsers);











module.exports = userRouter








