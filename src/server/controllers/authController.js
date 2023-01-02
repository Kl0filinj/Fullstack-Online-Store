const User = require('../services/userSchema');
require('dotenv').config();
const {
  isValidPassword,
  incryptPassword,
} = require('../utils/validatePassword');

const registration = async (req, res, next) => {
  const { password, email, username } = req.body;
  const user = await User.findOne({ email });
  // Есть ли юзер в БД
  if (user) {
    return res
      .status(409)
      .json({ message: 'Email in use', status: '409 Conflict' });
  }
  // Оказалось что он есть
  try {
    const incryptedPassword = incryptPassword(password);
    await User.create({
      password: incryptedPassword,
      email,
      username,
    });
    return res.status(201).json({
      data: { email },
      status: '201 Created',
      message: 'Check your email and verify account !',
    });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({
      message: 'User was not found',
      status: '404 Not Found',
    });
  }
  if (!isValidPassword(password, user.password)) {
    return res.status(401).json({
      message: 'Email or password is wrong',
      status: '401 Unauthorized',
    });
  }

  return res.status(200).json({
    status: '200 OK',
    data: {
      user: {
        email,
        username: user.username,
      },
    },
  });
};

// const getCurrentUserInfo = async (req, res, next) => {
//   const { email, subscription } = req.user;
//   try {
//     return successTemplate(res, 'Success', { data: { email, subscription } });
//   } catch (error) {
//     next(error);
//   }
// };

// const logOut = async (req, res, next) => {
//   const { email } = req.user;
//   try {
//     await User.findOneAndUpdate({ email }, { token: null });
//     return res.status(204).json({ status: '204 No Connect' });
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = {
  registration,
  login,
  //   getCurrentUserInfo,
  //   logOut,
};
