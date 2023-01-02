const jwt = require('jsonwebtoken');
const sendMailService = require('../utils/sendMailService');

const { notFoundErrorTemplate } = require('../constants/errorTemplates');
const verificationEmailTemplate = require('../constants/verificationEmailTemplate');
const { v4: uuidv4 } = require('uuid');
const {
  isValidPassword,
  incryptPassword,
} = require('../utils/validatePassword');
const { successTemplate } = require('../constants/successTemplate');
const User = require('../services/userSchema');
require('dotenv').config();
const secret = process.env.SECRET;

const registration = async (req, res, next) => {
  const { password, email } = req.body;
  const user = await User.findOne({ email });
  // Есть ли юзер в БД
  if (user) {
    return res
      .status(409)
      .json({ message: 'Email in use', status: '409 Conflict' });
  }
  // Оказалось что он есть и мы можем создать для него токен, аватар и письмо с подтвердением
  const verifyCode = uuidv4();
  const { mailSubject, mailText } = verificationEmailTemplate(verifyCode);
  console.log(mailSubject, mailText);
  try {
    await sendMailService(mailSubject, mailText, email);
    const incryptedPassword = incryptPassword(password);
    await User.create({
      password: incryptedPassword,
      email,
      verificationToken: verifyCode,
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

const registrationVerification = async (req, res, next) => {
  const { verificationToken } = req.params;
  const user = await User.findOne({ verificationToken });
  if (!user) {
    return notFoundErrorTemplate(res);
  }
  try {
    user.verify = true;
    user.verificationToken = '0';
    await user.save();
    return successTemplate(res, 'User successfully verifyed');
  } catch (error) {
    next(error);
  }
};

// const forcedVerification = async (req, res, next) => {
//   const { email } = req.body;
//   if (!email) {
//     return badRequestTemplate(res, 'missing required field email');
//   }
//   const user = await User.findOne({ email });
//   if (!user) {
//     return notFoundErrorTemplate(res);
//   }
//   if (user.verify) {
//     return badRequestTemplate(res, 'Verification has already been passed');
//   }
//   const { mailSubject, mailText } = verificationEmailTemplate(
//     user.verificationToken
//   );
//   try {
//     await sendMailService(mailSubject, mailText, email);
//     return successTemplate(res, 'Check your email and verify account !');
//   } catch (error) {
//     next(error);
//   }
// };

const login = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user.verify) {
    return res.status(401).json({
      message: 'User was not verifyed',
      status: '401 Not Verifyed',
    });
  }
  if (!user) {
    return notFoundErrorTemplate(res);
  }
  if (!isValidPassword(password, user.password)) {
    return res.status(401).json({
      message: 'Email or password is wrong',
      status: '401 Unauthorized',
    });
  }

  const payload = {
    id: user.id,
    email: user.email,
  };

  const token = jwt.sign(payload, secret, { expiresIn: '1h' });
  res.status(200).json({
    status: '200 OK',
    data: {
      token,
      user: {
        email,
      },
    },
  });
  await User.findOneAndUpdate({ email }, { token });
};

const getCurrentUserInfo = async (req, res, next) => {
  const { email } = req.user;
  try {
    return successTemplate(res, 'Success', { data: { email } });
  } catch (error) {
    next(error);
  }
};

const logOut = async (req, res, next) => {
  const { email } = req.user;
  try {
    await User.findOneAndUpdate({ email }, { token: null });
    return res.status(204).json({ status: '204 No Connect' });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  registration,
  login,
  getCurrentUserInfo,
  registrationVerification,
  // forcedVerification,
  logOut,
};
