const jsonServer = require("json-server");
const cors = require("cors");

const server = jsonServer.create();
const router = jsonServer.router("data/db.json");
const middlewares = jsonServer.defaults();

server.use(cors({ origin: "*" })); // ✅ MUST be first
server.use(middlewares);
server.use(router);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`JSON Server is running on port ${PORT}`);
});
