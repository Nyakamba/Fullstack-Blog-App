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
const Post = require("../../model/post/Post");

//instance of multer
const upload = multer({
  storage,
});

//forms rendering
postRoutes.get("/get-form-update", (req, res) => {
  res.render("posts/addPost", { error: "" });
});

postRoutes.get("/get-form-update/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.render("posts/updatePost", { post, error: "" });
  } catch (error) {
    res.render("posts/updatePost", { error, post: "" });
  }
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
postRoutes.put("/:id", protected, upload.single("image"), updatePostCtrl);

module.exports = postRoutes;
