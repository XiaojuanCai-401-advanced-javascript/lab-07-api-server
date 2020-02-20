'use strict';

const mongoose = require('mongoose');

class Model {
  constructor (schema){
    this.schema = schema;
  }

  create(record){
    const newRecord = new this.schema(record);
    return newRecord.save();
  }

  read(id){
  
    let query = id ? {_id: id} : {};
    return this.schema.find(query);
  }

  update(id, record){
    return this.schema.findByIdAndUpdate(id, record,{new:true});
  }

  delete(id){
    return this.schema.findByIdAndDelete(id);
  }
}

module.exports = Model;