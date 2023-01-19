const express = require('express');
const {
  addBrand,
  addType,
  listOfBrands,
  listOfTypes,
} = require('../controllers/typeAndBrandController');
// const auth = require('../utils/auth');

const router = express.Router();

router.post('/add-brand', addBrand);

router.post('/add-type', addType);

router.get('/types', listOfTypes);

router.get('/brands', listOfBrands);

module.exports = router;
