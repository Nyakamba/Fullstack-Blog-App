const Post = require("../../model/post/Post");
const User = require("../../model/user/User");
const appErr = require("../../utils/appErr");

//create post
const createPostCtrl = async (req, res, next) => {
  const { title, description, category } = req.body;
  try {
    if (!title || !description || !category || !req.file) {
      res.render("posts/addPost", { error: "All fields are required" });
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
    //redirect

    res.redirect("/");
  } catch (error) {
    res.render("posts/addPost", { error: error.message });
  }
};
//get all posts
const fetchPostsCtrl = async (req, res, next) => {
  try {
    //fetch all posts
    const allPosts = await Post.find().populate("comments").populate("user");
    res.json({ status: "success", data: allPosts });
  } catch (error) {
    return next(appErr(error.message));
  }
};
//details
const fecthPostCtrl = async (req, res, next) => {
  try {
    //get the id from params
    const id = req.params.id;
    //find the post
    const post = await Post.findById(id).populate("comments").populate("user");
    res.render("posts/postDetails", { post, error: "" });
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
      return res.render("posts/postDetails", {
        error: "You are not allowed to delete this post",
        post,
      });
    }
    //delete the post
    await Post.findByIdAndDelete(id);
    //redirect
    res.redirect("/");
  } catch (error) {
    return res.render("posts/postDetails", {
      error: error.message,
      post: "",
    });
  }
};

//update
const updatePostCtrl = async (req, res, next) => {
  const { title, description, category } = req.body;
  try {
    // if (!title || !description || !category || !req.file) {
    //   res.render("posts/updatePost", { error: "All fields are required" });
    // }
    //get the id from params
    const id = req.params.id;
    //find the post
    const post = await Post.findById(id);
    //check if the post belongs to the user
    if (post.user.toString() !== req.session.userAuth.toString()) {
      return res.render("posts/updatePost", {
        error: "You are not allowed to update this post",
        post: "",
      });
    }

    //check if user is updating image
    if (req.file) {
      await Post.findByIdAndUpdate(
        id,
        {
          title,
          description,
          category,
          image: req.file.path,
        },
        { new: true }
      );
    } else {
      await Post.findByIdAndUpdate(
        id,
        {
          title,
          description,
          category,
        },
        { new: true }
      );
    }

    //redirect
    res.redirect("/");
  } catch (error) {
    return res.render("posts/updatePost", {
      error: error.message,
      post: "",
    });
  }
};
module.exports = {
  createPostCtrl,
  fetchPostsCtrl,
  fecthPostCtrl,
  deletePostCtrl,
  updatePostCtrl,
};
