const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("data/db.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");

// Enable CORS for all requests
server.use(cors());
server.use(middlewares);
server.use(router);

// Use PORT from Render
const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
