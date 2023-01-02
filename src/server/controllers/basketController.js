const { notFoundErrorTemplate } = require('../constants/errorTemplates');
const { successTemplate } = require('../constants/successTemplate');
const Basket = require('../services/basketSchema');

const listBaskets = async (req, res, next) => {
  const { _id } = req.user;
  //   const { favorite = null, page = 0, limit = 5 } = req.query;
  //   let options = { owner: _id };
  //   if (favorite) {
  //     options = { ...options, favorite };
  //   }
  try {
    const baskets = await Basket.find({ owner: _id });
    // .skip(page * limit)
    // .limit(limit);
    return successTemplate(res, 'Success', { data: baskets });
  } catch (error) {
    next(error);
  }
};

const removeBasket = async (req, res, next) => {
  const { basketItemId } = req.params;
  const { _id } = req.user;
  try {
    const responce = await Basket.findOneAndRemove({
      _id: basketItemId,
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

const addBasket = async (req, res, next) => {
  const { deviceId } = req.body;
  const { _id } = req.user;
  try {
    const responce = await Basket.create({
      deviceId,
      owner: _id,
    });
    return res.json({ data: responce, status: 201 });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = {
  listBaskets,
  removeBasket,
  addBasket,
};
