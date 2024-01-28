const express = require("express");
const commentRoutes = express.Router();
const protected = require("../../middlewares/protected");
const {
  createCommentCtrl,
  commentDetailsCtrl,
  deleteCommentCtrl,
  updateCommentCtrl,
} = require("../../controllers/comments/comments");

//POST/api/v1/comments
commentRoutes.post("/", createCommentCtrl);

//GET/api/v1/comments/:id
commentRoutes.get("/:id", commentDetailsCtrl);

//DELETE/api/v1/comments/:id
commentRoutes.delete("/:id", deleteCommentCtrl);

//PUT/api/v1/comments/:id
commentRoutes.put("/:id", updateCommentCtrl);

module.exports = commentRoutes;
