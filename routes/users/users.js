const express = require("express");

const userRoutes = express.Router();

//POST/api/users/register

userRoutes.post("/api/users/register", async (req, res) => {
  try {
    res.json({ status: "success", user: "User registered" });
  } catch (error) {
    res.json(error);
  }
});

//POST/api/users/login
userRoutes.post("/api/users/login", async (req, res) => {
  try {
    res.json({ status: "success", user: "User login" });
  } catch (error) {
    res.json(error);
  }
});

//GET/api/user/:id
userRoutes.get("/api/users/:id", async (req, res) => {
  try {
    res.json({ status: "success", user: "User details" });
  } catch (error) {
    res.json(error);
  }
});

//GET/api/users/profile/:id
userRoutes.get("/api/users/profile/:id", async (req, res) => {
  try {
    res.json({ status: "success", user: "User profile" });
  } catch (error) {
    res.json(error);
  }
});

//PUT/api/users/profile-photo-upload/:id
userRoutes.put("/api/users/profile-photo-upload/:id", async (req, res) => {
  try {
    res.json({ status: "success", user: "User profile-photo upload" });
  } catch (error) {
    res.json(error);
  }
});

//PUT/api/users/cover-photo-upload/:id
userRoutes.put("/api/users/cover-photo-upload/:id", async (req, res) => {
  try {
    res.json({ status: "success", user: "User cover-photo upload" });
  } catch (error) {
    res.json(error);
  }
});

//PUT/api/users/update-password/:id
userRoutes.put("/api/users/update-password/:id", async (req, res) => {
  try {
    res.json({ status: "success", user: "User update password" });
  } catch (error) {
    res.json(error);
  }
});

//PUT/api/users/update/:id
userRoutes.put("/api/users/update/:id", async (req, res) => {
  try {
    res.json({ status: "success", user: "User updated" });
  } catch (error) {
    res.json(error);
  }
});

//GET/api/users/logout
userRoutes.get("/api/users/logout", async (req, res) => {
  try {
    res.json({ status: "success", user: "User logout" });
  } catch (error) {
    res.json(error);
  }
});

module.exports = userRoutes;
