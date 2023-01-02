const express = require('express');
const {
  listBaskets,
  removeBasket,
  addBasket,
} = require('../controllers/basketController');
// const auth = require('../../middleware/auth');
// const path = require('path');

const router = express.Router();

router.get('/', listBaskets);

router.post('/', addBasket);

router.delete('/:basketItemId', removeBasket);

module.exports = router;
