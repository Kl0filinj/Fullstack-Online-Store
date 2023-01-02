const express = require('express');
const {
  listDevices,
  getDeviceById,
  removeDevice,
  addDevice,
} = require('../controllers/deviceController');
// const auth = require('../../middleware/auth');
// const path = require('path');

const router = express.Router();

router.get('/', listDevices);

router.get('/:deviceId', getDeviceById);

router.post('/', addDevice);

router.delete('/:deviceId', removeDevice);

module.exports = router;
