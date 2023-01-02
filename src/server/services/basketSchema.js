const { Schema, SchemaTypes, model } = require('mongoose');

const basket = new Schema({
  owner: {
    type: SchemaTypes.ObjectId,
    ref: 'user',
  },
  deviceId: {
    type: SchemaTypes.ObjectId,
    ref: 'device',
  },
});

const Basket = model('baskets', basket);

module.exports = Basket;
