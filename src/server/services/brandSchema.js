const { Schema, model } = require('mongoose');

const brand = new Schema({
  name: {
    type: String,
    required: [true, 'Brand_Name is required'],
  },
  image: {
    type: String,
    required: [true, 'Image is required'],
  },
});

const Brand = model('brands', brand);

module.exports = Brand;
