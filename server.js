const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const PORT = 3000;

let userCounter = 0;

// Отдача статических файлов из директории 'mychat'
app.use(express.static(path.join(__dirname, 'mychat')));

// Обработка GET-запроса на '/'
app.get('/', (req, res) => {
  res.send('hi');
});

// Обработка GET-запроса на '/json'
app.get('/json', (req, res) => {
  res.json({ text: 'hi', numbers: [1, 2, 3] });
});

// Обработка GET-запроса на '/echo'
app.get('/echo', (req, res) => {
  const input = req.query.input || '';
  const normal = input;
  const shouty = input.toUpperCase();
  const characterCount = input.length;
  const backwards = input.split('').reverse().join('');

  res.json({ normal, shouty, characterCount, backwards });
});

// Обработка GET-запроса на '/sse'
app.get('/sse', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.flushHeaders();

  // Отправка сообщений клиенту в режиме реального времени через SSE
  io.on('connection', (socket) => {
    // Событие 'message' срабатывает, когда пользователь отправляет сообщение
    socket.on('message', (message) => {
      res.write(`data: ${JSON.stringify({ text: message })}\n\n`);
    });
  });
});



io.on('connection', (socket) => {
  // Присвоение уникального идентификатора пользователя (A, B, C, ...)
  const user = String.fromCharCode(65 + userCounter++);
  console.log(`${user} user connected`);

  socket.on('message', (msg) => {
    io.emit('message', `${user} user: ${msg}`);
    // console.log(`${msg}`)
  });

  socket.on('disconnect', () => {
    console.log(`${user} user disconnected`);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});