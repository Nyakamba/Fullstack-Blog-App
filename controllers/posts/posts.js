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
const deletePostCtrl = async (req, res, next) => {
  try {
    //get the id from params
    const id = req.params.id;
    //find the post
    const post = await Post.findById(id);
    //check if the post belongs to the user
    if (post.user.toString() !== req.session.userAuth.toString()) {
      return next(appErr("You are not allowed to delete this post", 403));
    }
    //delete the post
    await Post.findByIdAndDelete(id);
    res.json({
      status: "success",
      user: "Post has been  deleted successifully",
    });
  } catch (error) {
    return next(appErr(error.message));
  }
};

//update
const updatePostCtrl = async (req, res, next) => {
  const { title, description, category } = req.body;
  try {
    //get the id from params
    const id = req.params.id;
    //find the post
    const post = await Post.findById(id);
    //check if the post belongs to the user
    if (post.user.toString() !== req.session.userAuth.toString()) {
      return next(appErr("You are not allowed to update this post", 403));
    }

    const updatedPost = await Post.findByIdAndUpdate(
      id,
      {
        title,
        description,
        category,
        image: req.file.path,
      },
      { new: true }
    );
    res.json({ status: "success", data: updatedPost });
  } catch (error) {
    return next(appErr(error.message));
  }
};
module.exports = {
  createPostCtrl,
  fetchPostsCtrl,
  fecthPostCtrl,
  deletePostCtrl,
  updatePostCtrl,
};
