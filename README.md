# Chatly

Chatly is a real-time chat application built with  **Node.js**, and **WebSocket**, designed to provide seamless communication between users. When users launch Chatly, they are prompted to enter their names, which are displayed alongside their messages in the chat interface. The app dynamically updates incoming and outgoing messages, ensuring a smooth and interactive chatting experience. With its simple yet intuitive design, Chatly fosters real-time conversations in a single chat room, making it an engaging platform for connecting people instantly..

## Features
- Real-time messaging between multiple users.
- Interactive chat interface with incoming and outgoing message differentiation.
- Scalable architecture leveraging WebSocket for concurrency


## How to Run

1. Clone the repository:
   ```bash
   git clone 
   ```
1. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the server:
    ```bash
    node server.js
    ```
Open your browser and navigate to http://localhost:3000.

## How to Use
1. Upon loading the app, you will be prompted to enter your name.
2. Type your message in the text area and press Enter to send.
3. Messages will appear in the chat area, indicating whether they are incoming or outgoing.

## Application Architecture

    ## Backend ##

    Express.js: Handles HTTP requests and serves static files.
    WebSocket: Manages real-time bi-directional communication between the server and clients.

    ## Frontend ##

    HTML, CSS, and JavaScript are used for the chat interface.
    A single-page application dynamically updates messages without reloading.

    ## Concurrency Handling ##

    WebSocket Server: All clients maintain persistent WebSocket connections to the server.
    The server uses a connection listener to manage multiple clients simultaneously.
    Incoming messages are broadcasted to all connected clients except the sender.

## Assumptions and Design Choices

    ## Assumptions ##

    All users have unique names during a session.
    The application runs in a trusted environment, so no authentication is implemented.
    A single chat room is used, and all connected clients see the same messages.

    ## Design Choices ##

    WebSocket for Real-Time Communication: Chosen for its lightweight, event-driven model, which is ideal for real-time applications.
    Simple Frontend: Focused on functionality and ease of use, avoiding unnecessary complexity.
    Broadcast Logic: Messages are broadcast to all clients to ensure real-time synchronization
