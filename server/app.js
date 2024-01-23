const express = require('express');
const cors = require('cors');
const router = require('./routes');
const { errorHandlers } = require('./middlewares');

const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));
app.use('/api', router);
app.use(errorHandlers.errorHandler);

module.exports = app;
