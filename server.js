require("dotenv").config();
const express = require("express");
require("./config/dbConnect");
const app = express();

//middlewares
//routes
//Error handler middlewares
//liten server

const PORT = process.env.PORT || 9000;
app.listen(PORT, console.log(`Server is running on port ${PORT}`));

//password:
