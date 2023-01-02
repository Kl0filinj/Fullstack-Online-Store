const { Schema, SchemaTypes, model } = require('mongoose');

const device = new Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    unique: true,
  },
  price: {
    type: Number,
    required: [true, 'Price is required'],
  },
  brandId: {
    type: SchemaTypes.ObjectId,
    required: [true, 'brandId is required'],
    ref: 'brand',
  },
  typeId: {
    type: SchemaTypes.ObjectId,
    required: [true, 'typeId is required'],
    ref: 'type',
  },
  description: {
    type: String,
    required: [true, 'Desc is required'],
  },
});

const Device = model('devices', device);

module.exports = Device;
