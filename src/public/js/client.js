const socket = io();

socket.on("message", msg => {
    console.log(msg);
})

socket.emit("message", "Hallo Server!");