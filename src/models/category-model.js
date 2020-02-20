'use strict';

const schema = require('./category-schema');
const Model = require('./mongoose-model');

class Category extends Model{

  constructor() {
    super(schema);
  }
}

module.exports = Category;
