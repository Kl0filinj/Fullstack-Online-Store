const express = require('express');
const {
  listBaskets,
  removeBasket,
  addBasket,
} = require('../controllers/basketController');
const auth = require('../utils/auth');

const router = express.Router();

router.get('/', auth, listBaskets);

router.post('/', auth, addBasket);

router.delete('/:basketItemId', auth, removeBasket);

module.exports = router;
