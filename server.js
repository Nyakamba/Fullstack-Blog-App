require("dotenv").config();
const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const userRoutes = require("./routes/users/users");
const postRoutes = require("./routes/posts/posts");
const commentRoutes = require("./routes/comments/comments");
const globalErrHandler = require("./middlewares/globalErrHandler");
require("./config/dbConnect");
const app = express();

//middlewares
//configure ejs
app.set("view engine", "ejs");
//serve statice files
app.use(express.static("public"));
app.use(express.static(__dirname, +"/public"));

app.use(express.json()); //pass incoming data
app.use(express.urlencoded({ extended: true })); // form data
//session configure
app.use(
  session({
    secret: process.env.SESSION_KEY,
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
      mongoUrl: process.env.MONGO_URL,
      ttl: 24 * 60 * 60,
    }),
  })
);

//save the login user into locals
app.use((req, res, next) => {
  if (req.session.userAuth) {
    res.locals.userAuth = req.session.userAuth;
  } else {
    res.locals.userAuth = null;
  }
  next();
});

//render homepage
app.get("/", (req, res) => {
  res.render("index");
});

//users route
app.use("/api/v1/users", userRoutes);

//posts route
app.use("/api/v1/posts", postRoutes);

//comments route
app.use("/api/v1/comments", commentRoutes);

//Error handler middlewares
app.use(globalErrHandler);
//liten server

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));
