'use strict';

require('dotenv').config();
const {MONGODB_URI, PORT} = process.env;

const mongoose = require('mongoose');
const mongoose_option = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(MONGODB_URI, mongoose_option, () => {console.log('Database connected')});

const server = require('./src/server');
server.start(PORT);


