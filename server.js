const express = require("express");
const app = express();

const http = require("http");
const server = http.createServer(app);

const { Server } = require("socket.io");
const io = new Server(server);

server.listen(3000, () => {
    console.log("Application is Running ...");
})

app.use(express.static(__dirname + "/public"));
app.get("/", (rec, res) => {
    res.sendFile(__dirname + "/index.html");
})

io.on("connection", (socket) => {
    console.log("Client conncet to Server");

    socket.on("disconnect", () => {
        console.log("User Disconnected");
    })

    socket.on("sendmsg", (clientMsg) => {
        console.log(clientMsg);
        socket.broadcast.emit("recivedMsg",clientMsg);
    })
})

