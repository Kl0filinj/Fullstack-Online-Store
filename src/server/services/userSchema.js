const { Schema, model } = require('mongoose');

const user = new Schema({
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  verify: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    required: [true, 'Verify token is required'],
  },
  token: {
    type: String,
    default: null,
  },
});

const User = model('users', user);

module.exports = User;
