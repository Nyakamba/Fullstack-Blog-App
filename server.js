require("dotenv").config();
const express = require("express");
const userRoutes = require("./routes/users/users");
require("./config/dbConnect");
const app = express();

//middlewares

//---------
//users route
app.use("/api/v1/users/", userRoutes);

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
