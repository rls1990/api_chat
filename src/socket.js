import { Server } from "socket.io";

export const createServer = (httpServer) => {
  const io = new Server(httpServer, { cors: { origin: "*" } });

  // Configurar eventos de socket
  io.on("connection", (socket) => {
    //console.log("Nuevo cliente conectado: " + socket.id);
    //console.log(io.sockets.sockets.size);
    //io.sockets.sockets.forEach((s) => console.log(s.id));
    // Escuchar eventos del cliente
    socket.on("mensaje", (mensaje) => {
      //console.log(`Mensaje recibido: ${JSON.stringify(mensaje)}`);
      // Emitir evento a todos los clientes conectados
      io.emit("mensaje", mensaje);
    });

    // Manejar desconexión del cliente
    socket.on("disconnect", () => {
      console.log("Cliente desconectado");
    });
  });
};
