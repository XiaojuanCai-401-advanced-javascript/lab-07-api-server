'use strict';

const Model = require('./mongoose-model');
const schema = require('./product-schema');

class Product extends Model{

  constructor() {
    super(schema);
  }

}

module.exports = Product;
