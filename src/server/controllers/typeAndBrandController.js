const Type = require('../services/typeSchema');
const Brand = require('../services/brandSchema');

const listOfBrands = async (req, res, next) => {
  try {
    const responce = await Brand.find();
    return res.json({ data: responce, status: 201 });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const listOfTypes = async (req, res, next) => {
  try {
    const responce = await Type.find();
    return res.json({ data: responce, status: 201 });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const addBrand = async (req, res, next) => {
  const { name, image } = req.body;
  try {
    const responce = await Brand.create({
      name,
      image,
    });
    return res.json({ data: responce, status: 201 });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const addType = async (req, res, next) => {
  const { name } = req.body;
  try {
    const responce = await Type.create({
      name,
    });
    return res.json({ data: responce, status: 201 });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  addBrand,
  addType,
  listOfBrands,
  listOfTypes,
};
