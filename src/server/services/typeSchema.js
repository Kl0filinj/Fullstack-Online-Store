const { Schema, model } = require('mongoose');

const type = new Schema({
  name: {
    type: String,
    required: [true, 'Type_Name is required'],
  },
});

const Type = model('types', type);

module.exports = Type;
