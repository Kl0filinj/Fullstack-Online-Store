const express = require('express');
const { addBrand, addType } = require('../controllers/typeAndBrandController');
const auth = require('../utils/auth');

const router = express.Router();

router.post('/add-brand', auth, addBrand);

router.post('/add-type', auth, addType);

module.exports = router;
