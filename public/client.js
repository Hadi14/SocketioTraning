// const { Socket } = require("socket.io");

let socketio = io();
const ul = document.getElementById("messages");
const sendbtn = document.getElementById("sendbtn");
const inp = document.getElementById("input");

function addMessageToPage(msg) {
    const li = document.createElement("li");
    li.textContent = msg;
    ul.appendChild(li);
    inp.value = "";
}
socketio.on("recivedMsg", msg => {
    addMessageToPage(msg);
})
sendbtn.addEventListener("click", () => {
    socketio.emit("sendmsg", socketio.id + ": " + inp.value);
    addMessageToPage("YOU: " + inp.value);
    // addMessageToPage("gggg");
})