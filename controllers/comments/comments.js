const Comment = require("../../model/comment/Comment");
const User = require("../../model/user/User");
const Post = require("../../model/post/Post");

//create

const createCommentCtrl = async (req, res, next) => {
  const { message } = req.body;
  try {
    //find the post
    const post = await Post.findById(req.params.id);
    //create comment
    const comment = await Comment.create({
      user: req.session.userAuth,
      message,
    });
    //push comment to post
    post.comments.push(comment._id);
    //find the user
    const user = await User.findById(req.session.userAuth);
    //push comment to user
    user.comments.push(comment._id);

    //disable validation
    //save

    await post.save({ validationBeforeSave: false });
    await user.save({ validationBeforeSave: false });
    res.json({ status: "success", data: comment });
  } catch (error) {
    res.json(error);
  }
};
//deteils
const commentDetailsCtrl = async (req, res) => {
  try {
    res.json({ status: "success", user: "Comment details" });
  } catch (error) {
    res.json(error);
  }
};
//delete
const deleteCommentCtrl = async (req, res) => {
  try {
    //get the id from params
    const id = req.params.id;
    //find the comment
    const comment = await Comment.findById(id);
    //check if the comment belongs to the user
    if (comment.user.toString() !== req.session.userAuth.toString()) {
      return next(appErr("You are not allowed to delete this comment", 403));
    }
    //delete the comment
    await Comment.findByIdAndDelete(id);
    res.json({
      status: "success",
      user: "Comment has been  deleted successifully",
    });
  } catch (error) {
    res.json(error);
  }
};

//update
const updateCommentCtrl = async (req, res) => {
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
    res.json(error);
  }
};
module.exports = {
  createCommentCtrl,
  commentDetailsCtrl,
  deleteCommentCtrl,
  updateCommentCtrl,
};
