//register
const registerCtrl = async (req, res) => {
  try {
    res.json({ status: "success", user: "User registered" });
  } catch (error) {
    res.json(error);
  }
};

//login
const loginCtrl = async (req, res) => {
  try {
    res.json({ status: "success", user: "User login" });
  } catch (error) {
    res.json(error);
  }
};

//details
const userDetails = async (req, res) => {
  try {
    res.json({ status: "success", user: "User details" });
  } catch (error) {
    res.json(error);
  }
};

//profile
const profileCtrl = async (req, res) => {
  try {
    res.json({ status: "success", user: "User profile" });
  } catch (error) {
    res.json(error);
  }
};
//upload profile photo

const uploadProfilePhotoCtrl = async (req, res) => {
  try {
    res.json({ status: "success", user: "User profile-photo upload" });
  } catch (error) {
    res.json(error);
  }
};

//upload cover photo
const uploadCoverImageCtrl = async (req, res) => {
  try {
    res.json({ status: "success", user: "User cover-photo upload" });
  } catch (error) {
    res.json(error);
  }
};

//update password
const updatePasswordCtrl = async (req, res) => {
  try {
    res.json({ status: "success", user: "User update password" });
  } catch (error) {
    res.json(error);
  }
};

//update user

const updateUserCtrl = async (req, res) => {
  try {
    res.json({ status: "success", user: "User updated" });
  } catch (error) {
    res.json(error);
  }
};

//logout
const logoutCtrl = async (req, res) => {
  try {
    res.json({ status: "success", user: "User logout" });
  } catch (error) {
    res.json(error);
  }
};
module.exports = {
  registerCtrl,
  loginCtrl,
  userDetails,
  profileCtrl,
  uploadProfilePhotoCtrl,
  uploadCoverImageCtrl,
  updatePasswordCtrl,
  updateUserCtrl,
  logoutCtrl,
};
