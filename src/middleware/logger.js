'use strict';

function logger (req, res, next) {
  console.log(req.method, req.path, req.requestTime);
  next();
}

module.exports = logger;