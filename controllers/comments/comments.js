const Comment = require("../../model/comment/Comment");
const User = require("../../model/user/User");
const Post = require("../../model/post/Post");
const appErr = require("../../utils/appErr");

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

    await post.save({ validateBeforeSave: false });
    await user.save({ validateBeforeSave: false });
    console.log(post);
    res.json({ status: "success", data: comment });
  } catch (error) {
    next(appErr(error.message));
  }
};
//deteils
const commentDetailsCtrl = async (req, res, next) => {
  try {
    res.json({ status: "success", user: "Comment details" });
  } catch (error) {
    next(appErr(error.message));
  }
};
//delete
const deleteCommentCtrl = async (req, res, next) => {
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
    next(appErr(error.message));
  }
};

//update
const updateCommentCtrl = async (req, res, next) => {
  try {
    //get the id from params
    const id = req.params.id;
    //find the comment
    const comment = await Comment.findById(id);
    if (!comment) {
      return next(appErr("Comment not found"));
    }
    //check if the post belongs to the user
    if (comment.user.toString() !== req.session.userAuth.toString()) {
      return next(appErr("You are not allowed to update this comment", 403));
    }
    //update
    const updatedComment = await Comment.findByIdAndUpdate(
      id,
      {
        message: req.body.message,
      },
      { new: true }
    );
    res.json({ status: "success", data: updatedComment });
  } catch (error) {
    next(appErr(error));
  }
};
module.exports = {
  createCommentCtrl,
  commentDetailsCtrl,
  deleteCommentCtrl,
  updateCommentCtrl,
};
