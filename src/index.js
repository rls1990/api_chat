import { PORT } from "./config/config.js";
import { connectDB, defaultUser } from "./config/db.js";
import { server as httpServer } from "./httpServer.js";
import app from "./app.js";
import { createServer } from "./socket.js";

const server = httpServer(app);
createServer(server);

//DB Connect
connectDB();
defaultUser();

server.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
