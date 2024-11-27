const express = require('express');
const http = require('http');
const WebSocket = require('ws');

const app = express();
const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

const PORT = process.env.PORT || 3000;

// Serve static files (e.g., CSS, JS, images)
app.use(express.static(__dirname + '/public'));

// Serve the home page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/home.html'); // Home page file
});

// Serve the chat room page
app.get('/chat', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // Chat room file
});

// WebSocket server for chat functionality
wss.on('connection', (ws) => {
    console.log('Client connected...');

    ws.on('message', (data) => {
        const msg = JSON.parse(data);

        // Broadcast the message to all connected clients except the sender
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify(msg));
            }
        });
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

// Start the server
server.listen(PORT, () => {
    console.log(`Listening on port ${PORT} : : http://localhost:${PORT}/`);
});
