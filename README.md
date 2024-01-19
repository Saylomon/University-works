# MyChat - Real-Time Chat Application Omarov Nursultan SE - 2228

MyChat is a straightforward real-time chat application developed using Node.js, Express, and Socket.io. It empowers users to exchange messages in real-time within a simple and responsive interface.

## Features

- **Real-time Chat:** Utilizes WebSocket with Socket.io for seamless and instant message transmission.
- **Server-Sent Events (SSE):** Demonstrates real-time updates through SSE.
- **Simple Testing Routes:** Includes basic routes for testing purposes.
- **Responsive UI:** Provides a clean and responsive user interface.

## Getting Started

### Prerequisites

Ensure that Node.js is installed on your machine.

--- cd mychat
--- npm install

#### Dependencies

- Express: A web application framework for Node.js.
- Socket.io: A library enabling real-time, bidirectional, and event-based communication.

### Usage

1. Start the server:

--- node server.js

2. Open a web browser and go to (http://localhost:3000) to access the chat application.

3. Open multiple tabs or browsers to simulate multiple users and engage in real-time chat.

### Routes

- /: Responds with a plain text message "hi".
- /json: Responds with a JSON object containing a text property set to "hi" and a numbers property set to an array [1, 2, 3].
- /echo: Echoes back the input query parameter in various formats (normal, shouty, character count, and backwards).
- /sse: Establishes a Server-Sent Events (SSE) connection and sends real-time messages.

## Testing the Chat Application


### Submit a Message

In one of the tabs (http://localhost:3000/chat.html) or browsers, type a message in the input field and press "Send" or press Enter.


### Observe Real-Time Updates

On the same tab where you submitted the message, check if the message appears in the chat area immediately after you submit it.


### Check Other Tabs or Browsers

Switch to the other open tabs or browsers.

Observe if the message you sent appears in real-time on these tabs without manually refreshing the page.


### Check SSE Endpoint

Open a new tab or browser.

Navigate to (http://localhost:3000/sse).

Observe if real-time messages are received from the server.



## License

This project is licensed under the MIT License - see the (LICENSE) file for details.
