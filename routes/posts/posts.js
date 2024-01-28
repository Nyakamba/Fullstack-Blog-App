const express = require("express");
const postRoutes = express.Router();
const {
  createPostCtrl,
  fetchPostsCtrl,
  fecthPostCtrl,
  deletePostCtrl,
  updatePostCtrl,
} = require("../../controllers/posts/posts");
const protected = require("../../middlewares/protected");

//POST/api/v1/posts
postRoutes.post("/", protected, createPostCtrl);

//GEt/api/v1/posts
postRoutes.get("/", fetchPostsCtrl);

//GET/api/v1/posts/:id
postRoutes.get("/:id", fecthPostCtrl);

//DELETE/api/v1/posts/:id
postRoutes.delete("/:id", deletePostCtrl);

//PUT/api/v1/posts/:id
postRoutes.put("/:id", updatePostCtrl);

module.exports = postRoutes;
