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
    res.json({ status: "success", user: "Comment deleted" });
  } catch (error) {
    res.json(error);
  }
};

//update
const updateCommentCtrl = async (req, res) => {
  try {
    res.json({ status: "success", user: "Commnet updated" });
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
