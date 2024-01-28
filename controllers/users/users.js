const bcrypt = require("bcryptjs");
const User = require("../../model/user/User");
const appErr = require("../../utils/appErr");

//register
const registerCtrl = async (req, res, next) => {
  const { fullname, email, password } = req.body;
  if (!fullname || !email || !password) {
    return next(appErr("All fields are required"));
  }
  try {
    //1.check if user exits(email)
    const userFound = await User.findOne({ email });
    //throw error
    if (userFound) {
      return next(appErr("User already exits"));
    }
    //Hash password
    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, salt);
    //register user
    const user = await User.create({
      fullname,
      email,
      password: passwordHashed,
    });

    res.json({ status: "success", dat: user });
  } catch (error) {
    res.json(error);
  }
};

//login
const loginCtrl = async (req, res, next) => {
  const { password, email } = req.body;
  if (!email || !password) {
    return next(appErr("Email and password fields are required"));
  }
  try {
    //check if email exists
    const userFound = await User.findOne({ email });

    if (!userFound) {
      //throw error
      return next(appErr("Invalid login credentials"));
    }
    //}

    //verify password
    const isPasswordValid = await bcrypt.compare(password, userFound.password);
    if (!isPasswordValid) {
      //throw error
      return next(appErr("Invalid login credentials"));
    }
    //save user into session
    req.session.userAuth = userFound._id;

    res.json({ status: "success", data: userFound });
  } catch (error) {
    res.json(error);
  }
};

//details
const userDetails = async (req, res) => {
  try {
    //get user from params
    const userId = req.params.id;
    //find the user
    const user = await User.findById(userId);
    res.json({ status: "success", data: user });
  } catch (error) {
    res.json(error);
  }
};

//profile
const profileCtrl = async (req, res) => {
  try {
    //get the login user
    const userID = req.session.userAuth;
    //find the user
    const user = await User.findById(userID);
    res.json({ status: "success", data: user });
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

const updateUserCtrl = async (req, res, next) => {
  const { fullname, email } = req.body;
  try {
    //check if email is not taken
    if (email) {
      const emailTaken = await User.findOne({ email });
      if (emailTaken) {
        return next(appErr("Email is taken", 400));
      }
    }
    //update user
    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        fullname,
        email,
      },
      { new: true }
    );

    res.json({ status: "success", data: user });
  } catch (error) {
    return next(appErr(error.message));
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
