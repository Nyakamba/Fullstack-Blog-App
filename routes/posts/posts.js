const express = require("express");
const multer = require("multer");
const postRoutes = express.Router();
const {
  createPostCtrl,
  fetchPostsCtrl,
  fecthPostCtrl,
  deletePostCtrl,
  updatePostCtrl,
} = require("../../controllers/posts/posts");
const protected = require("../../middlewares/protected");
const storage = require("../../config/cloudinary");

//instance of multer
const upload = multer({
  storage,
});

//forms rendering
postRoutes.get("/get-post-form", (req, res) => {
  res.render("posts/addPost", { error: "" });
});

//POST/api/v1/posts
postRoutes.post("/", protected, upload.single("image"), createPostCtrl);

//GEt/api/v1/posts
postRoutes.get("/", fetchPostsCtrl);

//GET/api/v1/posts/:id
postRoutes.get("/:id", fecthPostCtrl);

//DELETE/api/v1/posts/:id
postRoutes.delete("/:id", protected, deletePostCtrl);

//PUT/api/v1/posts/:id
postRoutes.put("/:id", protected, upload.single("file"), updatePostCtrl);

module.exports = postRoutes;
