'use strict';

const express = require('express');
const app = express();

// middleware
const logger = require('./middleware/logger');
const timestamps = require('./middleware/timestamp');
const router = require('./api/router');
// const productRouter = require('./api/product-router');
// const categoryRouter = require('./api/category-router');
app.use(express.json());
app.use(timestamps);
app.use(logger);

app.use(router)
// app.use(productRouter);
// app.use(categoryRouter);

module.exports = {
  server: app,
  start: function (port){
    const PORT = port || 3000;
    app.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  }
};
