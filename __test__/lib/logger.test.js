'use strict';

const logger = require('../../src/logger.js.js');

const req = [];
const res = []; 
const next = jest.fn();

it ('Properly logs some output', () => {
  const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  logger(req,res,next);
  expect(consoleSpy).toHaveBeenCalled();
});

it ('Properly solves to next middleware', () => {
  logger(req, res, next),
  expect(next).toHaveBeenCalled();
})