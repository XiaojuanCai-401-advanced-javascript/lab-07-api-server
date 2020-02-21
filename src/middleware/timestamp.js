'use strict';

function timestamps (req, res, next) {
  const date = new Date();
  req.requestTime = date;
  next();
}

module.exports = timestamps;