'use strict';

const express = require('express');
const router = express.Router();

// middleware
const auth = require('../middleware/auth');
// const errorHandler = require('../middleware/error-handler');
// router.use(errorHandler);

// data
const Product = require('../models/product-model');
const products = new Product();
const Category = require('../models/category-model');
const categories = new Category();
const models = {'products': products, 'categories': categories}

// routes
function getModel (req, res, next){
  const modelName = req.params.model;
  req.model = models[modelName];
  if (req.model) next();
  else
      res.status(404).json();
}

router.param('model', getModel);
router.get('/api/v2/:model', getAll);
router.get('/api/v2/:model/:id', getOne);

router.post('/api/v2/:model', auth, addOne);
router.put('/api/v2/:model/:id', auth, updateOne);
router.delete('/api/v1/:model/:id', auth, deleteOne);

function getAll (req, res, next) {
  req.model.read()
    .then(result => {
      const output = {
        count: result.length,
        data: result
      }
      res.status(200).json(output);
    })
    .catch(next);
}

function getOne (req, res, next) {
  const {id} = req.params;
  req.model.read(id)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(next);
}

function addOne (req, res, next){
  req.model.create(req.body)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(next);
}

function updateOne (req, res, next){
  const {id} = req.params;
  req.model.update(id, req.body)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(next);
}

function deleteOne (req, res, next){
  const {id} = req.params;
  req.model.delete(id)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(next);
}

module.exports = router;