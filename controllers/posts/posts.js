const Post = require("../../model/post/Post");
const User = require("../../model/user/User");

//create post
const createPostCtrl = async (req, res) => {
  try {
    res.json({ status: "success", user: "Post ctreated" });
  } catch (error) {
    res.json(error);
  }
};
//get all posts
const fetchPostsCtrl = async (req, res) => {
  try {
    res.json({ status: "success", user: "Post list" });
  } catch (error) {
    res.json(error);
  }
};
//fetch a post
const fecthPostCtrl = async (req, res) => {
  try {
    res.json({ status: "success", user: "Post details" });
  } catch (error) {
    res.json(error);
  }
};

//delete
const deletePostCtrl = async (req, res) => {
  try {
    res.json({ status: "success", user: "Post deleted" });
  } catch (error) {
    res.json(error);
  }
};

//update
const updatePostCtrl = async (req, res) => {
  try {
    res.json({ status: "success", user: "Post updated" });
  } catch (error) {
    res.json(error);
  }
};
module.exports = {
  createPostCtrl,
  fetchPostsCtrl,
  fecthPostCtrl,
  deletePostCtrl,
  updatePostCtrl,
};
