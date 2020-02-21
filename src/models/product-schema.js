'use strict';

const mongoose = require('mongoose');

const product = mongoose.Schema({
  categoryId: {type: String, required: true},
  name: { type: String, required: true },
  display_name: {type: String, required: true },
  description: {type: String},
});

// console.log('i am in product-schema');
module.exports = mongoose.model('product', product);