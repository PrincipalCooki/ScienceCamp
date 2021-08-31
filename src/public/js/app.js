let userName = "";

function answer(msg) {
    console.log("answering");
}

function login() {
    userName = document.getElementById('name').value;
    userColor = document.getElementById("color").value;

    console.log(userName);
    console.log(userColor);

    if (userColor == "#000000") {
        alert("Wähle eine andere Farbe aus!");
        return;
    }

    if (userName == "") {
        alert("Du musst einen Namen eingeben!");
        return;
    }

    var userData = [userName, userColor];

    console.log(userData);

    alert("You are now logged in as " + userName);

    document.getElementById('login').hidden = true;
    document.getElementById('chat').hidden = false;

    joinRoom(userData);
}

function updateUserList(userList) {
    console.log("updateUserList: ")
    console.log(userList);
    let html = "";
    for (let i = 0; i < userList.length; i++) {
        console.log(userList[i][0])
        userName = userList[i][0]
        html += `
            <li class="list-group-item" style=color:${userList[i][1]}> ${userList[i][0]}</li>
        `;
    }
    document.getElementById('nutzerListe').innerHTML = html;
}

function welcomeUser(userName, userColor) {
    console.log("function welcomeUser ");
    console.log(userName+userColor);
    document.getElementById('chatVerlauf').innerHTML += `<p style=color:${userColor}>Hallo ${userName}</p><br>`;
}

function removeUser(user) {
    document.getElementById('chatVerlauf').innerHTML += `<i>${user} hat den Chat verlassen.</i><br>`;
}

function send() {
    let color = "#2836d3";
    let time = new Date().toLocaleTimeString();
    let message = document.getElementById('nachricht').value;
    let msg = {
        name: userName,
        time: time,
        message: message,
        color : color,
    };
    sendMessage(msg);
    addMessage(msg);
}

function addMessage(msg) {
    document.getElementById('chatVerlauf').innerHTML += `
        <div class="card mb-2">
            <div class="card-body container-fluid" style=color:${msg.color}>
                <div class="row">
                    <h6 class="card-subtitle mb-2 text-muted col-6" style=color:${msg.color}>${msg.name}</h6>
                    <h6 class="card-subtitle mb-2 text-muted col-6 text-end">${msg.time}</h6>
                </div>
                <p class="card-text">
                ${msg.message}
                </p>
                <span class="card-subtitle mb-2 text-muted col-6 text-end" id="answerButton" onclick="answer()">Antworten</span>

            </div>
        </div>
    `;
}