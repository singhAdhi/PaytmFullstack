const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://adhirajsingh7303:sCobaa2oafDtbQoe@cluster0.hjmd9u2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
  },
  password: {
    type: String,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
