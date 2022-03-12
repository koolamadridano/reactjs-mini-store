const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "Username is required"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  address: {
    type: String,
    required: [true, "address is required"],
  },
  hashValue: {
    type: String,
  },
});

module.exports = User = mongoose.model("user", UserSchema);
