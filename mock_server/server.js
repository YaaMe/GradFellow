// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.use((req, res, next) => {
  if (req.method === 'POST') {
    req.method = 'GET';
  }
  // Continue to JSON Server router
  next();
});

server.listen(3001, () => {
  console.log('JSON Server is running');
});
