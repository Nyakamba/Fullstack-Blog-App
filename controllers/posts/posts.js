const Post = require("../../model/post/Post");
const User = require("../../model/user/User");
const appErr = require("../../utils/appErr");

//create post
const createPostCtrl = async (req, res, next) => {
  const { title, description, category } = req.body;
  try {
    if (!title || !description || !category || !req.file) {
      return next(appErr("All fields are required"));
    }
    //find user
    const userId = req.session.userAuth;
    const userFound = await User.findById(userId);
    //create post
    const postCreated = await Post.create({
      title,
      description,
      category,
      user: userFound._id,
      image: req.file.path,
    });
    //push the post creted into the array of users posts
    userFound.posts.push(postCreated._id);
    //resave the userFound
    await userFound.save();
    res.json({ status: "success", data: postCreated });
  } catch (error) {
    return next(appErr(error.message));
  }
};
//get all posts
const fetchPostsCtrl = async (req, res, next) => {
  try {
    //fetch all posts
    const allPosts = await Post.find();
    res.json({ status: "success", data: allPosts });
  } catch (error) {
    return next(appErr(error.message));
  }
};
//fetch a post
const fecthPostCtrl = async (req, res, next) => {
  try {
    //get the id from params
    const id = req.params.id;
    //find the post
    const post = await Post.findById(id);
    res.json({ status: "success", data: post });
  } catch (error) {
    return next(appErr(error.message));
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
