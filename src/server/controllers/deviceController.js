const { notFoundErrorTemplate } = require('../constants/errorTemplates');
const { successTemplate } = require('../constants/successTemplate');
const Device = require('../services/deviceSchema');

const listDevices = async (req, res, next) => {
  const filter = req.query;

  const options = filter.length !== 0 ? { ...filter } : {};
  console.log(options);
  try {
    let devices;
    let status;

    if (req.route.path === '/new') {
      devices = await Device.find({ ...options }).limit(4);
      status = 'addictional';
    } else {
      devices = await Device.find({ ...options });
      status = 'initial';
    }

    return successTemplate(res, 'Success', { data: devices, status });
  } catch (error) {
    next(error);
  }
};

const getDeviceById = async (req, res, next) => {
  const { deviceId } = req.params;
  try {
    const deviceById = await Device.findById({ _id: deviceId });
    if (deviceById) {
      return successTemplate(res, 'Success', {
        data: deviceById,
      });
    } else {
      return notFoundErrorTemplate(res);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const removeDevice = async (req, res, next) => {
  const { deviceId } = req.params;
  const { _id } = req.user;
  try {
    const responce = await Device.findOneAndRemove({
      _id: deviceId,
      owner: _id,
    });
    if (responce) {
      return successTemplate(res, 'Success', { data: responce });
    } else {
      return notFoundErrorTemplate(res);
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const addDevice = async (req, res, next) => {
  const { name, price, description, brandId, typeId } = req.body;
  // const { _id } = req.user;
  try {
    const responce = await Device.create({
      name,
      price,
      description,
      brandId,
      typeId,
    });
    return res.json({ data: responce, status: 201 });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  listDevices,
  getDeviceById,
  removeDevice,
  addDevice,
};
