require("dotenv").config();
const express = require("express");
require("./config/dbConnect");
const app = express();

//middlewares

//---------
//users route
//----------

//POST/api/users/register
app.post("/api/users/register", async (req, res) => {
  try {
    res.json({ status: "success", user: "User registered" });
  } catch (error) {
    res.json(error);
  }
});

//POST/api/users/login
app.post("/api/users/login", async (req, res) => {
  try {
    res.json({ status: "success", user: "User login" });
  } catch (error) {
    res.json(error);
  }
});

//GET/api/user/:id
app.get("/api/users/:id", async (req, res) => {
  try {
    res.json({ status: "success", user: "User details" });
  } catch (error) {
    res.json(error);
  }
});

//GET/api/users/profile/:id
app.get("/api/users/profile/:id", async (req, res) => {
  try {
    res.json({ status: "success", user: "User profile" });
  } catch (error) {
    res.json(error);
  }
});

//PUT/api/users/profile-photo-upload/:id
app.put("/api/users/profile-photo-upload/:id", async (req, res) => {
  try {
    res.json({ status: "success", user: "User profile-photo upload" });
  } catch (error) {
    res.json(error);
  }
});

//PUT/api/users/cover-photo-upload/:id
app.put("/api/users/cover-photo-upload/:id", async (req, res) => {
  try {
    res.json({ status: "success", user: "User cover-photo upload" });
  } catch (error) {
    res.json(error);
  }
});

//PUT/api/users/update-password/:id
app.put("/api/users/update-password/:id", async (req, res) => {
  try {
    res.json({ status: "success", user: "User update password" });
  } catch (error) {
    res.json(error);
  }
});

//PUT/api/users/update/:id
app.put("/api/users/update/:id", async (req, res) => {
  try {
    res.json({ status: "success", user: "User updated" });
  } catch (error) {
    res.json(error);
  }
});

//GET/api/users/logout
app.get("/api/users/logout", async (req, res) => {
  try {
    res.json({ status: "success", user: "User logout" });
  } catch (error) {
    res.json(error);
  }
});

//---------
//posts route
//----------

//POST/api/posts
app.post("/api/posts", async (req, res) => {
  try {
    res.json({ status: "success", user: "Post ctreated" });
  } catch (error) {
    res.json(error);
  }
});

//GEt/api/posts
app.get("/api/posts", async (req, res) => {
  try {
    res.json({ status: "success", user: "Post list" });
  } catch (error) {
    res.json(error);
  }
});

//GET/api/posts/:id
app.get("/api/posts/:id", async (req, res) => {
  try {
    res.json({ status: "success", user: "Post details" });
  } catch (error) {
    res.json(error);
  }
});

//DELETE/api/posts/:id
app.delete("/api/posts/:id", async (req, res) => {
  try {
    res.json({ status: "success", user: "Post deleted" });
  } catch (error) {
    res.json(error);
  }
});

//PUT/api/posts/:id
app.put("/api/posts/:id", async (req, res) => {
  try {
    res.json({ status: "success", user: "Post updated" });
  } catch (error) {
    res.json(error);
  }
});

//---------
//comments route
//----------

//POST/api/comments
app.post("/api/comments", async (req, res) => {
  try {
    res.json({ status: "success", user: "Comment ctreated" });
  } catch (error) {
    res.json(error);
  }
});

//GET/api/comments/:id
app.get("/api/comments/:id", async (req, res) => {
  try {
    res.json({ status: "success", user: "Comment details" });
  } catch (error) {
    res.json(error);
  }
});

//DELETE/api/comments/:id
app.delete("/api/comments/:id", async (req, res) => {
  try {
    res.json({ status: "success", user: "Comment deleted" });
  } catch (error) {
    res.json(error);
  }
});

//PUT/api/comments/:id
app.put("/api/comments/:id", async (req, res) => {
  try {
    res.json({ status: "success", user: "Commnet updated" });
  } catch (error) {
    res.json(error);
  }
});

//Error handler middlewares
//liten server

const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
