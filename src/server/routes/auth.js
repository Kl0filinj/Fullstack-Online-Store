const express = require('express');
const {
  registration,
  login,
  getCurrentUserInfo,
  registrationVerification,
  // forcedVerification,
  logOut,
} = require('../controllers/authController');
// const auth = require('../../middleware/auth');
// const path = require('path');
// const {
//   userRegDataValidationSchema,
// } = require('../../middleware/validationContacts');

const router = express.Router();

router.post('/signup', registration);

router.post('/login', login);

router.get('/verify/:verificationToken', registrationVerification);

// router.post('/verify', forcedVerification);

router.get('/current', getCurrentUserInfo);

router.get('/logout', logOut);

module.exports = router;
