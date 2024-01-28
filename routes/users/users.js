const express = require("express");
const userRoutes = express.Router();
const {
  registerCtrl,
  loginCtrl,
  userDetails,
  profileCtrl,
  uploadProfilePhotoCtrl,
  uploadCoverImageCtrl,
  updatePasswordCtrl,
  updateUserCtrl,
  logoutCtrl,
} = require("../../controllers/users/users");
const protected = require("../../middlewares/protected");

//POST/api/v1/users/register

userRoutes.post("/register", registerCtrl);

//POST/api/v1/users/login
userRoutes.post("/login", loginCtrl);

//GET/api/users/profile/:id
userRoutes.get("/profile", protected, profileCtrl);

//PUT/api/users/profile-photo-upload/:id
userRoutes.put("/profile-photo-upload/:id", uploadProfilePhotoCtrl);

//PUT/api/v1/users/cover-photo-upload/:id
userRoutes.put("/cover-photo-upload/:id", uploadCoverImageCtrl);

//PUT/api/v1/users/update-password/:id
userRoutes.put("/update-password/:id", updatePasswordCtrl);

//PUT/api/v1/users/update/:id
userRoutes.put("/update/:id", updateUserCtrl);

//GET/api/v1/user/:id
userRoutes.get("/:id", userDetails);

//GET/api/v1/users/logout
userRoutes.get("/logout", logoutCtrl);

module.exports = userRoutes;
