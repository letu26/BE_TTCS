const mongoose = require("mongoose");
const usersSchema = new mongoose.Schema(
  {
    fullName: String,
    email: String,
    password: String,
    token:String,
    admin: Boolean
  }
);

const Users = mongoose.model("Users", usersSchema, "users");

module.exports = Users;