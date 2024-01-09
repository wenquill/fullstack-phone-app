const http = require('http');
const app = require('./app');

const httpServer = http.createServer(app);

const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || 5000;

httpServer.listen(PORT, HOST, () => {
  console.log(`Server is listening host ${HOST} at port ${PORT}`);
});
