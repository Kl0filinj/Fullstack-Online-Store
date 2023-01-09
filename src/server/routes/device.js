const express = require('express');
const {
  listDevices,
  getDeviceById,
  removeDevice,
  addDevice,
} = require('../controllers/deviceController');
const auth = require('../utils/auth');
// const path = require('path');

const router = express.Router();

router.get('/', auth, listDevices);

router.get('/:deviceId', auth, getDeviceById);

router.post('/', auth, addDevice);

router.delete('/:deviceId', auth, removeDevice);

module.exports = router;
