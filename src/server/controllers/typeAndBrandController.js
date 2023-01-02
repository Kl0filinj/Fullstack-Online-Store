const Type = require('../services/typeSchema');
const Brand = require('../services/brandSchema');

const addBrand = async (req, res, next) => {
  const { brandName } = req.body;
  try {
    const responce = await Brand.create({
      brandName,
    });
    return res.json({ data: responce, status: 201 });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

const addType = async (req, res, next) => {
  const { typeName } = req.body;
  try {
    const responce = await Type.create({
      typeName,
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
};
