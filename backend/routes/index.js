const express = require("express");
const app = express();
const userRouter = require("./user.js");

app.use("/user", userRouter);
const router = express.Router();

module.exports = router;
