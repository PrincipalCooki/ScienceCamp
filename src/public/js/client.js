const socket = io();

// logMessage für Debug-Zwecke
socket.on('logMessage', msg => {
    console.log(msg);
});

function logMessage(msg) {
    socket.emit('logMessage', msg);
}

// Nutzer beim Server anmelden
function joinRoom(userData) {
    console.log("function joinroom:");
    console.log(userData);
    socket.emit('joinRoom', userData);
}

socket.on('userJoined', data => {
    console.log("on user Joined");
    console.log(data);
    console.log(data.name + data.color);
    console.log("userList")
    console.log(data.nameList)
    welcomeUser(data.name, data.color);

    updateUserList(data.nameList);
});

// Nachricht senden
function sendMessage(msg) {
    socket.emit('sendMessage', msg);
}

socket.on('sendMessage', msg => {
    addMessage(msg);
})

// Nutzer verabschieden
socket.on('userLeft', data => {
    removeUser(data.name);
    updateUserList(data.nameList);    
});