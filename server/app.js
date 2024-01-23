const express = require('express');
const cors = require('cors');
const router = require('./routes');
const { errorHandlers } = require('./middlewares');
const { STATIC_PATH } = require('./constants');

const app = express();

app.use(cors({ origin: '*' }));
app.use(express.static(STATIC_PATH));
app.use(express.json());
app.use('/api', router);
app.use(errorHandlers.errorHandler);

module.exports = app;
