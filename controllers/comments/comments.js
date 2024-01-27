//create

const createCommentCtrl = async (req, res) => {
  try {
    res.json({ status: "success", user: "Comment ctreated" });
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
