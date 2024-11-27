// Establish a WebSocket connection to the server
const ws = new WebSocket(`wss://${location.host}`);

let name;
let messageInput = document.querySelector('#messageInput');
let messageArea = document.querySelector('.chat__messages');

// Prompt user for their name until a valid name is entered
do {
    name = prompt('Please enter your name: ');
} while (!name);

// Send message on pressing 'Enter' (without Shift)
messageInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
        sendMessage(e.target.value);
    }
});

function sendMessage(message) {
    if (message.trim() === '') return; // Ignore empty messages

    let msg = { user: name, message: message.trim() };

    appendMessage(msg, 'outgoing'); // Display message in chat window
    messageInput.value = ''; // Clear input field
    scrollToBottom();

    ws.send(JSON.stringify(msg)); // Send message to server
}

function appendMessage(msg, type) {
    let messageDiv = document.createElement('div');
    messageDiv.classList.add(type, 'message');
    messageDiv.innerHTML = `<h4>${msg.user}</h4><p>${msg.message}</p>`;
    messageArea.appendChild(messageDiv);
}

// Handle incoming messages from server
ws.onmessage = (event) => {
    const msg = JSON.parse(event.data);
    appendMessage(msg, 'incoming');
    scrollToBottom();
};

// Scroll chat window to show the latest message
function scrollToBottom() {
    messageArea.scrollTop = messageArea.scrollHeight;
}
