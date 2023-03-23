const mongoose = require("mongoose");

const User = mongoose.Schema({
  userId: {
    type: String,
    require: true,
  },
  userName: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  age: {
    type: Number,
    require: true,
  },
  mobile: {
    type: String,
    require: true,
  },
  subscribed: {
    type:Boolean,
    required:true
  },
});

module.exports = mongoose.model('users', User);
