const express = require('express');
const { addBrand, addType } = require('../controllers/typeAndBrandController');
// const auth = require('../../middleware/auth');

const router = express.Router();

router.post('/add-brand', addBrand);

router.post('/add-type', addType);

module.exports = router;
