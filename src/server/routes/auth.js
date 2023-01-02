const express = require('express');
const { registration, login } = require('../controllers/authController');
// const auth = require('../../middleware/auth');
// const path = require('path');
// const {
//   userRegDataValidationSchema,
// } = require('../../middleware/validationContacts');

const router = express.Router();

router.post('/signup', registration);

router.post('/login', login);

// router.get('/current', auth, getCurrentUserInfo);

// router.get('/logout', auth, logOut);
module.exports = router;
