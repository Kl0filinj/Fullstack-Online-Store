const { Schema, model } = require('mongoose');

const brand = new Schema({
  name: {
    type: String,
    required: [true, 'Brand_Name is required'],
  },
});

const Brand = model('brands', brand);

module.exports = Brand;
