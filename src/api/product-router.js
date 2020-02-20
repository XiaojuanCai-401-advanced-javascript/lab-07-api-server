'use strict';

const express = require('express');
const router = express.Router();

// data
const Product = require('../models/product-model');
const products = new Product();

// middleware
const auth = require('../middleware/auth');

router.get('/api/v1/products', getAllProducts);
router.get('/api/v1/products/:id', getOneProduct);

router.put('/api/v1/products', auth(), addOneProduct);
router.post('/api/v1/products/:id', updateOneProduct);
router.delete('/api/v1/products/:id', deleteOneProduct);

function getAllProducts (req, res, next) {

  products.read()
    .then(result => {
      const output = {
        count: result.length,
        data: result
      }
      res.status(200).json(output);
    })
    .catch(next);
}

function getOneProduct (req, res, next) {
  const {id} = req.params;
  products.read(id)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(next);
}

function addOneProduct (req, res, next){
  products.create(req.body)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(next);
}

function updateOneProduct (req, res, next){
  const {id} = req.params;
  products.update(id, req.body)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(next);
}

function deleteOneProduct (req, res, next){
  const {id} = req.params;
  products.delete(id)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(next);
}

module.exports = router;