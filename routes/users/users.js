const express = require("express");

const userRoutes = express.Router();

//POST/api/v1/users/register

userRoutes.post("/register", async (req, res) => {
  try {
    res.json({ status: "success", user: "User registered" });
  } catch (error) {
    res.json(error);
  }
});

//POST/api/v1/users/login
userRoutes.post("/login", async (req, res) => {
  try {
    res.json({ status: "success", user: "User login" });
  } catch (error) {
    res.json(error);
  }
});

//GET/api/v1/user/:id
userRoutes.get("/:id", async (req, res) => {
  try {
    res.json({ status: "success", user: "User details" });
  } catch (error) {
    res.json(error);
  }
});

//GET/api/users/profile/:id
userRoutes.get("/profile/:id", async (req, res) => {
  try {
    res.json({ status: "success", user: "User profile" });
  } catch (error) {
    res.json(error);
  }
});

//PUT/api/users/profile-photo-upload/:id
userRoutes.put("/profile-photo-upload/:id", async (req, res) => {
  try {
    res.json({ status: "success", user: "User profile-photo upload" });
  } catch (error) {
    res.json(error);
  }
});

//PUT/api/v1/users/cover-photo-upload/:id
userRoutes.put("/cover-photo-upload/:id", async (req, res) => {
  try {
    res.json({ status: "success", user: "User cover-photo upload" });
  } catch (error) {
    res.json(error);
  }
});

//PUT/api/v1/users/update-password/:id
userRoutes.put("/update-password/:id", async (req, res) => {
  try {
    res.json({ status: "success", user: "User update password" });
  } catch (error) {
    res.json(error);
  }
});

//PUT/api/v1/users/update/:id
userRoutes.put("/update/:id", async (req, res) => {
  try {
    res.json({ status: "success", user: "User updated" });
  } catch (error) {
    res.json(error);
  }
});

//GET/api/v1/users/logout
userRoutes.get("/logout", async (req, res) => {
  try {
    res.json({ status: "success", user: "User logout" });
  } catch (error) {
    res.json(error);
  }
});

module.exports = userRoutes;
