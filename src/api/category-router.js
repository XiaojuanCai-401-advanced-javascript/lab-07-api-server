'use strict';

const express = require('express');
const router = express.Router();

// data
const Category = require('../models/category-model');
const categories = new Category();
const auth = require('../middleware/auth');

router.get('/api/v1/categories', getAllCategories);
router.get('/api/v1/categories', getOneCategory);

router.use(auth);
router.put('/api/v1/categories', addOneCategory);
router.post('/api/v1/categories/:id', updateOneCategory);
router.delete('/api/v1/categories/:id', deleteOneCategory);

function getAllCategories (req, res, next) {

  categories.read()
    .then(result => {
      const output = {
        count: result.length,
        data: result
      }
      res.status(200).json(output);
    })
    .catch(next);
}

function getOneCategory (req, res, next) {
  const {id} = req.params;
  categories.read(id)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(next);
}

function addOneCategory (req, res, next){
  categories.create(req.body)
    .then(result => {
      res.status(201).json(result);
    })
    .catch(next);
}

function updateOneCategory (req, res, next){
  const {id} = req.params;
  categories.update(id, req.body)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(next);
}

function deleteOneCategory (req, res, next){
  const {id} = req.params;
  categories.delete(id)
    .then(result => {
      res.status(200).json(result);
    })
    .catch(next);
}

module.exports = router;