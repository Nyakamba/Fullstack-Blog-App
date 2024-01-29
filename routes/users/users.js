const express = require("express");
const multer = require("multer");
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
const storage = require("../../config/cloudinary");

//instance of multer
const upload = multer({ storage });

//---------
//Rendering forms
//---------

//login form
userRoutes.get("/login", (req, res) => {
  res.render("users/login", { error: "" });
});
//register form
userRoutes.get("/register", (req, res) => {
  res.render("users/register", { error: "" });
});

//profile form
userRoutes.get("/profile-page", (req, res) => {
  res.render("users/profile");
});

//upload profile photo
userRoutes.get("/upload-profile-photo-form", (req, res) => {
  res.render("users/uploadProfilePhoto");
});

//upload cover photo
userRoutes.get("/upload-cover-photo-form", (req, res) => {
  res.render("users/uploadCoverPhoto");
});

//upadte userc form
userRoutes.get("/update-user-form", (req, res) => {
  res.render("users/updateUser");
});

//POST/api/v1/users/register

userRoutes.post("/register", registerCtrl);

//POST/api/v1/users/login
userRoutes.post("/login", loginCtrl);

//GET/api/users/profile/:id
userRoutes.get("/profile", protected, profileCtrl);

//PUT/api/users/profile-photo-upload/:id
userRoutes.put(
  "/profile-photo-upload/",
  protected,
  upload.single("profile"),
  uploadProfilePhotoCtrl
);

//PUT/api/v1/users/cover-photo-upload/:id
userRoutes.put(
  "/cover-photo-upload/",
  protected,
  upload.single("coverImage"),
  uploadCoverImageCtrl
);

//PUT/api/v1/users/update-password/:id
userRoutes.put("/update-password/:id", updatePasswordCtrl);

//PUT/api/v1/users/update/:id
userRoutes.put("/update/:id", updateUserCtrl);

//GET/api/v1/user/:id
userRoutes.get("/:id", userDetails);

//GET/api/v1/users/logout
userRoutes.get("/logout", logoutCtrl);

module.exports = userRoutes;
